import Body from "@/components/Body";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import CardBox from "@/components/ui/CardBox";
import { Button } from "@/components/ui/Button";
import { Formik } from "formik";
import Header from "@/components/Header";
import { toast } from "sonner";

const ForgetPassword = () => {
  return (
    <Body>
      <Header />
      <div className="flex items-center justify-center px-4 py-20">
        <CardBox>
          <Formik
            initialValues={{ otp: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                toast(values.otp);
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              isSubmitting,
              setValues,
            }) => {
              console.log("hello world", values.otp);
              return (
                <form onSubmit={handleSubmit}>
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-neutral-900">
                      Verify your email
                    </h2>
                    <p className="mt-2 text-sm text-neutral-500">
                      We have sent you a verification email. Please check your
                      inbox and click on the link to verify your email address.
                    </p>
                    <div className="w-full flex items-center justify-center mt-4">
                      <InputOTP
                        name="otp"
                        id="otp"
                        onChange={(e) => {
                          setValues({ ...values, otp: e });
                        }}
                        value={values.otp}
                        maxLength={6}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full mt-4 h-[40px]"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </CardBox>
      </div>
    </Body>
  );
};

export default ForgetPassword;
