import Image from 'next/image';
import * as Sentry from '@sentry/nextjs';
import { HeartPulse } from 'lucide-react';
import { getPatient } from '@/lib/actions/patient.action';
import AppointmentForm from '@/components/forms/AppointmentForm';

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  //Sentry.metrics.set('user_view_new-appointment', patient.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <h1 className="header flex text-gray-700"><HeartPulse size={35} style={{marginRight: '8px'}}/>  Welcome to MedTek</h1>

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright mt-10 py-12">© {new Date().getFullYear()} MedTek</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        width={1000}
        height={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}