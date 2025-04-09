import Body from "@/components/Body";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Formik } from "formik";
import Header from "@/components/Header";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
  otp: Yup.string()
    .min(6, "OTP must be 6 characters")
    .max(6, "OTP must be 6 characters")
    .required("OTP is required"),
});

const VerifyEmail = () => {
  return (
    <Body>
      <Header />
      <div className="flex items-center justify-center px-4 py-20">
        <Card className="max-w-md w-full p-10 rounded-3xl border">
          <Formik
            initialValues={{ otp: "" }}
            onSubmit={(values, { setSubmitting }) => {
              validationSchema
                .validate(values)
                .then(() => {
                  setTimeout(() => {
                    setSubmitting(false);
                    toast("OTP verified successfully");
                  }, 1000);
                })
                .catch((err) => {
                  toast(err.message);
                  setSubmitting(false);
                });
            }}
          >
            {({ handleSubmit, values, isSubmitting, setValues }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold">
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
                      {isSubmitting ? "Verifying..." : "Verify"}
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </Card>
      </div>
    </Body>
  );
};

export default VerifyEmail;
