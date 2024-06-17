import { useState } from "react";
import "./style/AddItemForm.css";

function AddItemForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [link, setLink] = useState("");
  const handleAddItemForm = (event) => {
    event.preventDefault();
    console.log("Formulaire soumis avec les données :", {
      title,
      link,
      category,
      status,
    });
  };
  return (
    <form className="add-item-form">
      <label onSubmit={handleAddItemForm} htmlFor="title">
        Nom du produit :
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label htmlFor="category">
        Type de produit :
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Sélectionner une catégorie</option>
          <option value="1">Livre</option>
          <option value="2">Vêtements</option>
          <option value="3">Électronique</option>
          <option value="4">Intérieur</option>
          <option value="5">Jardin</option>
        </select>
      </label>
      <label htmlFor="status">
        Catégorie de budjet :
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Sélectionner un statut</option>
          <option value="1">Trouver pas cher</option>
          <option value="2">Faire soi-même</option>
          <option value="3">Mettre argent de côté</option>
        </select>
      </label>
      <label htmlFor="link">
        Lien :
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddItemForm;
