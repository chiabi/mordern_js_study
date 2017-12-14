// 비공개
let square, trio;

square = x => Math.pow(x, 2);
trio = x => Math.pow(x, 3);

// 모듈을 내보낼때 객체로 내보낼 수 있다.
export {
    square, trio
};

// default가 있고 없고가 차이가 있음
// export default{
//     square, trio
// };