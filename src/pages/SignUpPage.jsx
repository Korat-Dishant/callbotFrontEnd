import { SignUp } from "@clerk/clerk-react";
const uri = import.meta.env.VITE_APP_SERVER_URI;

const SignUpPage = () => {
  return (
    <div className="w-full flex justify-center">
      <SignUp forceRedirectUrl={`${uri}/chat`} />
    </div>
  );
};

export default SignUpPage;
