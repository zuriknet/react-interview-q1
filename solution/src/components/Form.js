import CustomDropdown from "./CustomDropdown";

function Form({ onValChange, formObject, onFormSubmit }) {
  CustomDropdown.options = formObject.location;
  return (
    <div className="row mb-4">
      <div className="col mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={onValChange}
          value={formObject.name}
          name="name"
        />
      </div>
      <div className="col mb-3">
        <CustomDropdown />
      </div>
      <div className="col-2 d-grid float-right">
          <input
            size="sm"
            type="reset"
            value="Clear"
            className="mb-1 btn btn-secondary"
            />
          <input
            size="sm"
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-success"
          />
      </div>
    </div>
  );
}
export default Form;