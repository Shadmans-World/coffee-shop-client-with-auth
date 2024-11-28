import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(coffee => coffee._id !== _id)
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="flex w-full justify-between p-3">
        <div className="flex flex-col  justify-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-400">Quantity: {quantity}</p>
          <p className="text-gray-400">Category: {category}</p>
          <p className="text-gray-400">Taste: {taste}</p>
        </div>
        <div className="join join-vertical space-y-4">
          <button className="btn ">View</button>
          <Link to={`/updateCoffee/${_id}`}><button className="btn ">Edit</button></Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-orange-500 "
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
