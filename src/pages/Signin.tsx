import Input from "../components/ui/Input";
import { Formik } from "formik";
import Body from "../components/Body";
import * as Yup from "yup";
import Header from "../components/Header";
import GoogleSignInButton from "../components/ui/GoogleSignInButton";
import { Button } from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Link from "@/components/ui/Link";
import CardBox from "@/components/ui/CardBox";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignInPage() {
  let initial_values = {
    email: "",
    password: "",
  };

  return (
    <Body>
      <Header />
      <div className="flex items-center justify-center px-4 py-20">
        <CardBox>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-neutral-900">
              Sign in to P2PShare
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Welcome back. Let's build something amazing.
            </p>
          </div>
          <Formik
            onSubmit={({ email, password }) => {
              console.log(email, password);
            }}
            validationSchema={validationSchema}
            initialValues={initial_values}
          >
            {({
              values,
              handleSubmit,
              errors,
              touched,
              handleChange,
              isSubmitting,
            }) => {
              return (
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label
                        className="block text-sm font-medium text-neutral-700"
                        htmlFor="email"
                      >
                        Email address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        value={values.email}
                        error={touched.email == true ? errors.email : undefined}
                        placeholder="Your email (e.g jhon@gmail.com)"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-700"
                      >
                        Password
                      </Label>
                      <Input
                        placeholder="Your password"
                        id="password"
                        name="password"
                        type="password"
                        error={
                          touched.password == true ? errors.password : undefined
                        }
                        value={values.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <Link to="/">Forgot password?</Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-[40px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </Button>
                  <GoogleSignInButton />
                </form>
              );
            }}
          </Formik>

          <div className="text-center text-sm text-neutral-600">
            Don't have an account? <Link to="/signup">Register here</Link>
          </div>
        </CardBox>
      </div>
    </Body>
  );
}
