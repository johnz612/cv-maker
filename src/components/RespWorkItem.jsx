import { useForm } from "react-hook-form";
import { useCV } from "../context/CVContext";
import Input from "../ui/Input";
import { FaRegTrashCan } from "react-icons/fa6";

function RespWorkItem({ role, roles, setRoles, job }) {
  const { workHistory, dispatch } = useCV();
  const { register } = useForm();

  function handleChange(value, key) {
    const newRole = value;
    const newRoles = roles.map((item) => {
      if (item.id === role.id) {
        return { ...item, role: newRole };
      } else {
        return item;
      }
    });
    setRoles(newRoles);

    const updatedJob = { ...job, [key]: newRoles };

    const updatedHistory = workHistory.map((work) => {
      return work.id === job.id ? updatedJob : work;
    });

    dispatch({
      type: "setWorkHistory",
      payload: updatedHistory,
    });
  }

  function handleDelete() {
    const newRoles = roles.filter((item) => item.id !== role.id);
    console.log(newRoles);

    setRoles(newRoles);

    const updatedJob = { ...job, roles: newRoles };

    const updatedHistory = workHistory.map((work) => {
      return work.id === job.id ? updatedJob : work;
    });

    dispatch({
      type: "setWorkHistory",
      payload: updatedHistory,
    });
  }
  return (
    <div className="flex gap-1 ">
      <Input
        id="role"
        mode="long"
        textMode="small"
        {...register("role", {
          onChange: (e) => {
            handleChange(e.target.value, "roles");
          },
        })}
        className="flex-grow"
      />
      <button
        type="button"
        className="flex items-center justify-center p-2 rounded cursor-pointer hover:bg-red-400"
        onClick={handleDelete}
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
}

export default RespWorkItem;
