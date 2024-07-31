import axios from "axios";
import { useState } from "react";

export default function PieceForm() {
  const [serialNumber, setSerialNumber] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [observation, setObservation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPiece = {
      serialNumber,
      quantity,
      observation,
    };
    dispatch(createPiece(newPiece));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Número de Série:</label>
        <input
          type="text"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Quantidade:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Observação:</label>
        <input
          type="text"
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar Peça</button>
    </form>
  );
}