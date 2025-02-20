const GetResult = (): void => {
  let name1: string = (
    document.getElementById("FirstPerson") as HTMLInputElement
  ).value;
  let name2: string = (
    document.getElementById("SecondPerson") as HTMLInputElement
  ).value;

  name1 = name1.trim().toLocaleLowerCase().split(" ").join("");
  name2 = name2.trim().toLocaleLowerCase().split(" ").join("");

  if (name1.length == 0) {
    alert("First person name is empty !");
  } else if (name2.length == 0) {
    alert("Second person name is empty!");
  } else {
    let smallestName: string = name1.length < name2.length ? name1 : name2;

    Array.from(smallestName).forEach((char) => {
      if (name1.includes(char) && name2.includes(char)) {
        name1 = name1.split(char).join("");
        name2 = name2.split(char).join("");
      }
    });

    const iterationCount = name1.length + name2.length;

    let flames = ["F", "L", "A", "M", "E", "S"];

    while (flames.length > 1) {
      const index = iterationCount % flames.length;
      if (index === 0) {
        flames.pop();
      } else {
        flames.splice(index - 1, 1);
      }
    }

    const resultObj: { [key: string]: string } = {
      F: "Friends",
      L: "Lovers",
      A: "Affectionate",
      M: "Marriage",
      E: "Enemies",
      S: "Siblings",
    };

    alert(`You two are ${resultObj[flames[0]]}!`);
  }
};
