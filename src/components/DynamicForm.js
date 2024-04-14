// DynamicForm.js
import React from 'react';

const DynamicForm = ({ metadata }) => {
  return (
    <div>
      <h2>Dynamic Form</h2>
      <form>
        {metadata.fields.map((field) => (
          <div key={field}>
            <label>{field}</label>
            {metadata.types[field].has('string') ? (
              <input type="text" name={field} />
            ) : metadata.types[field].has('number') ? (
              <input type="number" name={field} />
            ) : metadata.types[field].has('boolean') ? (
              <select name={field}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            ) : (
              <input type="text" name={field} />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
