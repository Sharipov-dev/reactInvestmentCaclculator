export default function InputTab({ tabName, onChange }) {
  function handleChange(event) {
    onChange(tabName, event.target.value);
  }

  return (
    <p>
      <label>{tabName}</label>
      <input type="text" required onChange={handleChange} />
    </p>
  );
}
