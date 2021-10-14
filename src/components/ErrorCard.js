const ErrorCard = ({ error }) => {
  return (
    <div className="card text text-display notification-card">
      Error Fetching Data: {error}
    </div>
  );
};

export default ErrorCard;
