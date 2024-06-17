import "./style/AddItemForm.css";

function AddItemForm() {
  return (
    <form className="add-item-form">
      <label htmlFor="title">
        Titre :
        <input type="text" id="title" name="title" required />
      </label>
      <label htmlFor="link">
        Lien :
        <input type="text" id="link" name="link" />
      </label>
      <label htmlFor="category">
        Catégorie :
        <select id="category" name="category" required>
          <option value="">Sélectionner une catégorie</option>
          <option value="categorie1">Livre</option>
          <option value="categorie2">Vêtements</option>
          <option value="categorie3">Électronique</option>
          <option value="categorie3">Intérieur</option>
          <option value="categorie3">Jardin</option>
        </select>
      </label>
      <label htmlFor="status">
        Statut :
        <select id="status" name="status" required>
          <option value="">Sélectionner un statut</option>
          <option value="status1">Trouver pas cher</option>
          <option value="status2">Faire soi-même</option>
          <option value="status3">Mettre argent de côté</option>
        </select>
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddItemForm;
