import InputTab from './InputTab';

export default function InputSection({ handleInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputTab
          tabName="Initial Investment"
          onChange={handleInputChange}
        ></InputTab>
        <InputTab
          tabName="Annual Investment"
          onChange={handleInputChange}
        ></InputTab>
      </div>

      <div className="input-group">
        <InputTab
          tabName="Expected Return"
          onChange={handleInputChange}
        ></InputTab>
        <InputTab tabName="Duration" onChange={handleInputChange}></InputTab>
      </div>
    </section>
  );
}
