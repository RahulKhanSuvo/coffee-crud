import Swal from "sweetalert2";

const AddCoffee = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const chef = form.chef.value;
    const photo = form.photo.value;
    const coffee = { name, quantity, chef, photo };
    console.log(coffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="container mx-auto">
      <form onSubmit={handelSubmit} className="">
        <div className="flex flex-col">
          <label>
            <span>Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col">
          <label>
            <span>quantity</span>
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col">
          <label>
            <span>chef</span>
          </label>
          <input
            type="text"
            name="chef"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col">
          <label>
            <span>Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <input className="btn " type="submit" name="Add coffee" id="" />
      </form>
    </div>
  );
};

export default AddCoffee;
