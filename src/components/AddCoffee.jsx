import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
       
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffee = {name, quantity,supplier,taste,category,details,photo}
        console.log(coffee)

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset()
            }
        })
    }
  return (
    <div className="bg-[#F4F3F0] p-20">
      <h2 className="text-3xl font-extrabold mb-10">Add a Coffee</h2>
      <form className="flex flex-col gap-y-4" onSubmit={handleAddCoffee}>
        {/* Form Row */}
        <div className="md:flex gap-3">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              type="text"
              placeholder="Coffee Name"
              name="name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Form Row */}
        <div className="md:flex gap-3">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Supplier</span>
            </div>
            <input
              type="text"
              placeholder="Enter Coffee Supplier"
              name="supplier"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              placeholder="Enter Coffee Taste"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Form Row */}
        <div className="md:flex gap-3">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              placeholder="Enter Coffee Category"
              name="category"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              placeholder="Enter Coffee Details"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Form Row */}
        <div className="md:flex gap-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              placeholder="Enter Photo URL"
              name="photo"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-block bg-black text-white">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
