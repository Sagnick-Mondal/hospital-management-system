import Link from 'next/link';
import Image from 'next/image';
import * as Sentry from '@sentry/nextjs';
import { HeartPulse } from 'lucide-react';
import { Doctors } from '@/constants';
import { formatDateTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { getUser } from '@/lib/actions/patient.action';
import { getAppointment } from '@/lib/actions/appointment.action';

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const user = await getUser(userId);
  const appointmentId = (searchParams?.appointmentId as string) || '';
  const appointment = await getAppointment(appointmentId);
  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  //Sentry.metrics.set('user_view_appointment-success', user.name);

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <h1 className="header flex text-gray-700"><HeartPulse size={35} style={{marginRight: '8px'}}/>  Welcome to MedTek</h1>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-gray-900 text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p className='text-gray-900'>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p className='text-gray-900'>Requested appointment details: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-12"
            />
            <p className="whitespace-nowrap text-gray-900">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        <p className="copyright">© 2024 CarePluse</p>
      </div>
    </div>
  );
};

export default RequestSuccess;