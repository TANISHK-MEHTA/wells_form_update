// CSVProcessor.js
import Papa from 'papaparse';

const processCSV = (file, callback) => {
  Papa.parse(file, {
    header: true,
    complete: (result) => {
      callback(result.data);
    },
  });
};

export default processCSV;
