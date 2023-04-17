import './Spinner.css';

export const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="blob top"></div>
        <div className="blob bottom"></div>
        <div className="blob left"></div>
        <div className="blob move-blob"></div>
      </div>
    </div>
  );
};
