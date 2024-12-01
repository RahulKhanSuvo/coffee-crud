import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees }) => {
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        fetch(`http://localhost:5000/coffee/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 w-full shadow-xl">
        <figure>
          <img src={coffee.photo} alt="Movie" />
        </figure>
        <div className="flex w-full justify-between">
          <div>
            <h2 className="card-title">{coffee.name}</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
          <div className=" flex flex-col gap-2 py-2">
            <button className="btn btn-primary">view</button>
            <Link to={`/update/${coffee._id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => handelDelete(coffee._id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
