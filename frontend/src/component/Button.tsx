export const Button = ({ type }: { type: string }) => {
  return (
    <button
      type="button"
      className=" w-full mt-7 text-white bg-black hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {type === "signup" ? "SignUp" : "SignIn"}
    </button>
  );
};
