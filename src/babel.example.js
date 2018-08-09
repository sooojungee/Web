function Element() {

}

const ele = new Element();

//코드를 작성하는 곳은 src고 변환되는 곳으 dist이다.

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

async function t(){
  await(1000);
}