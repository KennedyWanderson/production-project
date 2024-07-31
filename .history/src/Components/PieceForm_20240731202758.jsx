import axios from "axios";

export default function PieceForm({piece, OnSave}) {

    const [formData, setFormData] = useSta(piece || { id: '', serialNumber: '', quantity: '', observation: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (piece) {
          await axios.put(`/api/pieces/${piece.id}`, formData);
        } else {
          await axios.post('/api/pieces', formData);
        }
        OnSave();
      } catch (error) {
        console.error('Error saving piece', error);
      }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="id" value={formData.id} onChange={handleChange} placeholder="ID" required />
            <input name="serialNumber" value={formData.serialNumber} onChange={handleChange} placeholder="Número de Série" required />
            <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantidade" required />
            <textarea name="observation" value={formData.observation} onChange={handleChange} placeholder="Observação" />
            <button type="submit">Salvar</button>
        </form>
    )
}