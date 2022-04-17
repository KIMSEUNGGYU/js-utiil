// https://www.geeksforgeeks.org/lodash-_-memoize-method/

function memoize2(func) {
    const cache = new WeakMap();
    // 외부에서 캐시 값 접근 가능하기 위해 prototype 에 추가
    // 테스트 시 캐시 제거용, lodash 에서도 캐시에 접근 가능하게 구성되어 있음.
    func.__proto__.cache = cache;

    return function (...args) {
        const key = args[0]

        // 해당 memoize 는 단일 인자만 처리
        if(args.length !== 1) {
            return func(...args)
        }

        if(cache.has(key)) {
            return cache.get(key);
        }

        const result = func(...args);
        cache.set(key, result);

        return result;
    } 
}


module.exports = {
    memoize2,
};    