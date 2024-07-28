
export default function PieceForm() {
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