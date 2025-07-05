import Image from "next/image";

import { HeartPulse } from "lucide-react";
import { getUser } from "@/lib/actions/patient.action";
import RegisterForm from "@/components/forms/RegisterForm";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  // Sentry.metrics.set('user_view_register', user.name); // Removed: Sentry.metrics does not exist

  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | PasskeyModal */}
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-a flex-col py-10">
          <h1 className="header flex text-gray-700">
            <HeartPulse size={35} style={{ marginRight: "8px" }} />
            MedTek
          </h1> <br />
          <RegisterForm user={user} />

          <p className="justify-items-end text-gray-300 xl:text-left justify-center align-middle flex">
              © {new Date().getFullYear()} MedTek
            </p>
        </div>
      </section>

      <Image
        src="/assets/register.jpg"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
