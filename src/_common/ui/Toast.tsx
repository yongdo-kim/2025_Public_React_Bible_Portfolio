const Toast = ({ t, message }: { t: any; message: string }) => (
  <div
    className={`${
      t.visible ? "animate-enter" : "animate-leave"
    } flex w-full max-w-md rounded-lg bg-white shadow-lg`}
  >
    <p>{message}</p>
  </div>
);

export default Toast;
