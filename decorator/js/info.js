class ClientComponent {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const res = await fetch(this.url);
    const data = await res.json();
    return data;
  }
}

class ClientDecorator {
  constructor(client) {
    this.client = client;
  }

  async getData() {
    return await this.client.getData();
  }
}

class UpperCaseDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    const newData = data.map((e) => {
      e.title = e.title.toUpperCase();
      return e;
    });
    return newData;
  }
}

class HTMLClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    const newData = data.map((e) => {
      e.title = `<h1>${e.title}</h1>`;
      e.thumbnailUrl = `<img src='${e.thumbnailUrl}'>`;

      return e;
    });
    return newData;
  }
}

(async () => {
  const client = new ClientComponent(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const data = client.getData();
  //   console.log(data);

  const upperCaseDecorator = new UpperCaseDecorator(client);
  const data2 = await upperCaseDecorator.getData();
  //   console.log(data2);

  const htmlDecorator = new HTMLClientDecorator(client);
  const data3 = await htmlDecorator.getData();
  console.log(data3);

  //   divContent1.innerHTML = data3.reduce((ac, e) => {
  //     return ac + e.title + e.thumbnailUrl;
  //   }, "");
})();
