import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

export default function NewFile() {
  const { register,handleSubmit,watch,formState: { errors }} = useForm()

  const showNotification = (message, type) => {
    console.log("toast");
    toast(message, { type });
  };

  const onSubmit = (data) => {
    console.log(data)
    showNotification("Done", "success");
  }

  console.log(watch("example")) // watch input value by passing the name of it

  

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}