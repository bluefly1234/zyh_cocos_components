/**
 * 公共方法库
 */

/// 随机数
export function random(n1: number, n2 = 0): number {
    const min = n1 < n2 ? n1 : n2;
    const max = n1 < n2 ? n2 : n1;
    return Math.random() * (max - min) + min;
}

/// 随机整数
export function randomInt(n1: number, n2 = 0) {
    return this.random(n1, n2) >> 0;
}

/// 乱序数组相等
export function arrayEqual(a1: any[], a2: any[]) {
    if (a1.length !== a2.length) return false;
    a2 = a2.slice(0);
    a1.forEach(item => {
        const index = a2.indexOf(item);
        if (index > -1) a2.splice(index, 1);
    }); // 把两数组中相等元素剔除后，没有剩下即为相等
    return a2.length < 1;
}

/// 递归寻找子级
export function getChildDeepById(id: string, $parent?: cc.Node, key = 'itemId') {
    const $children = ($parent || this.node).children;
    for (let i = 0; i < $children.length; i++) {
        const $child = $children[i];
        if ($child[key] === id) return $child;
        if ($child.children && $child.childrenCount > 0) {
            const temp = getChildDeepById(id, $child, key);
            if (temp) return temp;
        }
    }
    return null;
}
