# mathbiolab

- websiteMathBio: generación content news, content users, content publications
- websiteMathBio: implementación popover
- TODO: eliminar popover en sm windows

semana 01-07-2025

- avances mathbio
- generación page que se llena con pdf de un static directory, permite agregar eliminar o editar los pdf de las publicaciones de una manera más limpia. existe una falla, las publicaciones no tienen un link descarga, es por eso que se genero un repositorio de pdfs, intentando cubrir el error

> [!NOTE]
> No sé como hacer esa vinculación, ya que hay que ver pdf por pdf, es un trabajo tedioso no imposible jeje

- todo: vincular pdf, con las publicaciones

- se corrigio error de las imagenes, fix header sm, se muestran los colaboradores en un acordion
- se oculta el popover para sm

- se actualizo imagen profesora karem y se agregaron 2 imágenesa a la gallery

> [!WARNING]
> Ya testeado el vps no es el problema del pq la pagina no presenta ssl. La compra del dominio (genomas) , se generó en una plataforma? no sé pagina que no cuenta con zone dns. No se sabe si es tipo AAA o no.

<h1 style="color:red">AYUDA: <small>no sé como corregir eso, la solución es configurar la zone dns en el propio vps pero sería raro.</small>
</h1>

- se presenta primera versión estable de la pagina, no quiere decir que este lista, faltan revisiones por parte de la jefatura, comentarios de feedback, que se generen los content correctos para cada pagina como por ejemplo:

```json
{
  "title": "Contact Us",
  "description": "Get in touch with our lab for inquiries, collaborations, or feedback.",
  "contactCard": {
    "header": "Our Address & Details",
    "location": {
      "title": "Lab Location",
      "address": "123 Science Avenue, Tech Park\nResearch City, ST 90210\nUnited States"
    },
    "email": {
      "title": "Email Us",
      "address": "info@labnotes.example.com"
    },
    "phone": {
      "title": "Call Us",
      "number": "+1 (234) 567-890"
    },
    "officeHours": {
      "title": "Office Hours",
      "weekdays": "Monday - Friday: 9:00 AM - 5:00 PM",
      "weekends": "Weekends & Holidays: Closed"
    }
  },
  "mapSection": {
    "title": "Find Us Here"
  }
}
```

> [!NOTE]
> además del ejemplo anterior existen 7 content (8 en total) que es necesario revisar para validar la información.
> Junto con eso es necesario tambien, retirar el contenido "Lorem". Faltan comentarios de feedback pero aquí se generó la primera versión estable ya se puede visitar.
