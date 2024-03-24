import CustomDropdown from "./CustomDropdown";

function Form({ onValChange, formObject, onFormSubmit }) {
  CustomDropdown.options = formObject.location;
  return (
    <>
    <div className="row mb-4">
      <div className="col-12 mb-3">
      <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={onValChange}
          value={formObject.name}
          name="name"
        />
      </div>
      <div className="col-12 mb-3">
      <label>Location</label>
        <CustomDropdown />
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-10"></div>
      <div className="col-2">
          <input
            size="sm"
            type="reset"
            value="Clear"
            className="mb-2 me-4 btn btn-secondary float-right"
            />
          <input
            size="sm"
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-success"
          />
      </div>
    </div>
    </>
  );
}
export default Form;