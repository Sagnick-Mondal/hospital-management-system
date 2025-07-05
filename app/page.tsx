import Link from 'next/link';
import Image from 'next/image';
import { HeartPulse } from 'lucide-react';
import PasskeyModal from '@/components/PasskeyModal';
import { PatientForm } from '@/components/forms/PatientForm';

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <h1 className="header flex text-gray-700"><HeartPulse size={35} style={{marginRight: '8px'}}/>  Welcome to MedTek</h1>
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-gray-400 xl:text-left">
              © {new Date().getFullYear()} MedTek
            </p>
            <Link href="/?admin=true" className="gradient-text-to-br from text-gray-400 to-blue-600 hover:text-emerald-400 transition-all duration-500  font-bold">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/onboarding.jpg"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}