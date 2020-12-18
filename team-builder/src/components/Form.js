import React from "react";

export default function Form(props) {
    const { values, update, submit } = props;
    
    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
          <div className="form-group inputs">
            <label>
                Name
                <input
                name="name"
                type="text"
                value={values.name}
                onChange={onChange}
                />
            </label>

            <label>
                Email
                <input
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                />
            </label>
            
            <label>
                Role
                <select name="role" value={values.role} onChange={onChange}>
                <option value="">------select role------</option>
                <option value="backend">Backend Engineer</option>
                <option value="frontend">Frontend Engineer</option>
                <option value="designer">Designer</option>
            </select>
            </label>

            <div className="submit">
            <button>Submit</button>
            </div>
          </div>
        </form>
    );
  }