DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS status;

CREATE TABLE category (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255)
);

CREATE TABLE status (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255)
);

CREATE TABLE product (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  link_to VARCHAR(255),
  status_id INT UNSIGNED,
  category_id INT UNSIGNED,
  CONSTRAINT fk_product_status 
    FOREIGN KEY (status_id)
    REFERENCES status(id),
  CONSTRAINT fk_product_category 
    FOREIGN KEY (category_id)
    REFERENCES category(id)
);

INSERT INTO category (label) VALUES ('Livre');
INSERT INTO category (label) VALUES ('Vêtements');
INSERT INTO category (label) VALUES ('Électronique');
INSERT INTO category (label) VALUES ('Intérieur');
INSERT INTO category (label) VALUES ('Jardin');

INSERT INTO status (label) VALUES ('Trouver pas cher');
INSERT INTO status (label) VALUES ('Faire soi-même');
INSERT INTO status (label) VALUES ('Mettre argent de côté');

INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('La Voix du Samouraï - Yatumoto Hayamoto', NULL, 1, 1);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Qui a tué mon père - Édouard Louis', NULL, 1, 1);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Les Nouveaux Désobéissants - Manuel Cervera Marzal', NULL, 1, 1);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Les Damnés de la Terre - Henri Poulaille', NULL, 1, 1);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ("En finir avec les idées fausses de l'extrême droite - Vincent Edin", NULL, 1, 1);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Sois Jeune et Tais-toi - Salomé Saquet', NULL, 1, 1);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Le Syndrome Magnéto', NULL, 1, 1);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Infernet', NULL, 1, 1);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Bottines Hautes Plateformes', 'https://www.laboutiqueduhauttalon.fr/bottines-femme/11222-bottines-arc-en-ciel-hautes-plateformes.html', 3, 2);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Boots Talons Larges Noires', 'https://www.laboutiqueduhauttalon.fr/bottes-femme/7075-bottes-gothiques-noires.html', 3, 2);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Fairphone 4 e.os', 'https://shop.fairphone.com/fr/fairphone-4-e-operating-system', 3, 3);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('T-shirt Tom de Finlande', 'https://www.etsy.com/fr/listing/1239582141/tom-de-finlande-ftp?click_key=278e5fd34ff07af02261d6f939d83c749fe93faa%3A1239582141&click_sum=2f79cadf&ref=sim_items_grid-7&variation0=2658173079&variation1=2658173073', 2, 2);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Projecteur BenQ TH685i', 'https://www.benq.eu/fr-fr/projector/cinema/th685i.html', 3, 3);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Chemise à Carreaux', NULL, 1, 2);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Bretelles en Cuir', 'https://fr.shein.com/1pc-Men-Black-Adjustable-Stud-Decor-PU-Leather-Fashionable-Punk-Suspenders-Suitable-For-Matching-With-Shirts-And-T-Shirts-p-32851646.html?mallCode=1', 2, 2);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Framboisiers', NULL, 1, 5);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Verveine du Japon', NULL, 1, 5);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Butternut', NULL, 2, 5);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Tapis', NULL, 1, 4);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Tondeuse', NULL, 3, 5);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Bose Flip 5', 'https://www.bose.fr/fr_fr/products/speakers/portable_speakers/soundlink-revolve.html', 3, 3);
INSERT INTO product (product_name, link_to, status_id, category_id) VALUES ('Planche à Découper en Pierre', NULL, 1, 4);
