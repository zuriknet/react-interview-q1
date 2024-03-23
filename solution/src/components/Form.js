import CustomDropdown from "./CustomDropdown";

function Form({ onValChange, formObject, onFormSubmit }) {
  return (
    <div className="row mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={onValChange}
          value={formObject.name}
          name="name"
        />
      </div>
      <div className="mb-3">
        <CustomDropdown />
      </div>
      <div className="d-grid">
        <input
        
          onClick={onFormSubmit}
          className="btn btn-success"
        />
      </div>
    </div>
  );
}
export default Form;