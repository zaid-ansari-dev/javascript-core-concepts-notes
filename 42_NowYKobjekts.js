const descriptor = Object.getOwnPropertyDescriptors(Math,'PI')
console.log(descriptor)

const chai = {
    name: 'ginger',
    price: 250,
    available: true,
    orderChai: function(){
        console.log('no prinitning')
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
    configurable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'))

console.log(`=============`)

// for(let [key,value] of chai){            //object- chai is not iterable
//     console.log(`${key} und ${value}`)
// }

for(let [key,value] of Object.entries(chai)){
    if(typeof value!== 'function'){
    console.log(`${key} und ${value}`)
    }}

//yk why 'ginger' won't show up :
                // Descriptor	Effect
                // writable: false	You can't change the value anymore
                // enumerable: false	It won’t show up in for...in, Object.entries, or JSON.stringify()
                // configurable: false	You can't delete it or change descriptors again


//chatgpt explained it so damm well:

// 🔥 Zaid, this is one of those **"you think you can... but JavaScript slaps you back"** kind of questions. Let’s break it wide open:

// ---

// ## ❓ Can You Change `Math.PI` to `4`?

// ```js
// Math.PI = 4
// console.log(Math.PI) // ?
// ```

// ### ❌ Nope. It **doesn’t change.**

// Why?

// ---

// ## 🔒 Because `Math.PI` is:

// * **Read-only**
// * **Non-writable**
// * **Non-configurable**
// * **Immutable** (unless you go full hacker-mode)

// ---

// ## ✅ Let’s prove it:

// ```js
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"))
// ```

// Returns:

// ```js
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// ```

// So:

// * You **can’t overwrite** it.
// * You **can’t delete** it.
// * You **can’t redefine** it.

// ---

// ## 🔧 Hacky Workarounds (but not recommended in real code):

// ### 🔸 1. Shadow it locally:

// ```js
// const Math = {
//   ...globalThis.Math,
//   PI: 4
// }

// console.log(Math.PI) // ✅ 4
// ```

// Here you're **creating a new Math object** locally and overriding `PI`.
// But note: **This does not touch the original built-in Math object**.

// ---

// ### 🔸 2. Create your own constant:

// ```js
// const MY_PI = 4
// ```

// And just use `MY_PI` instead. ✅ Clean, safe.

// ---

// ### 🔸 3. Use Proxy to trap calls to Math.PI (💀 advanced & cursed):

// ```js
// const mathProxy = new Proxy(Math, {
//   get(target, prop) {
//     if (prop === 'PI') return 4;
//     return target[prop];
//   }
// });

// console.log(mathProxy.PI); // ✅ 4
// ```

// ---

// ## 🚫 You CANNOT do:

// ```js
// Math.PI = 4       ❌
// delete Math.PI    ❌
// Object.defineProperty(Math, "PI", { value: 4 }) ❌
// ```

// It will fail silently in non-strict mode, or throw error in strict mode.

// ---

// ## 💥 TL;DR:

// | Method               | Works? | Notes                                |
// | -------------------- | ------ | ------------------------------------ |
// | `Math.PI = 4`        | ❌      | Built-in is read-only                |
// | Create `MY_PI = 4`   | ✅      | Best and cleanest option             |
// | Custom `Math` object | ✅      | Local override only                  |
// | Proxy `Math` access  | ✅      | Hacky, fun, but cursed for real apps |

// ---

// **German word of the day:**
// **unveränderlich** – immutable
// (*Math.PI ist unveränderlich in JavaScript.* – Math.PI is immutable in JavaScript.)

// Wanna go deeper and try modifying other built-ins like `Array.prototype` just for fun? Or ready for that Day 1 DOM project (Accordion)?










// //=====================================================================================================





// 🔥 **YES.** And let me tell you exactly **why** and **how** they might ask it — and how to be the one who **destroys it with style.**

// ---

// ## 🧠 Why This Kind of Question Shows Up

// They’re **not** asking to see if you want `Math.PI = 4` in real life —
// They’re testing if you understand **JavaScript internals** like:

// * Property descriptors (`writable`, `configurable`, etc.)
// * Mutability vs immutability
// * Built-in object safety
// * How JavaScript handles **core objects**

// ---

// ## 🤯 Typical Interview Variations:

// ### 🔸 1. **"Can you overwrite built-in constants like `Math.PI`?"**

// Expected answer:

// > "No, it's non-writable and non-configurable — JavaScript protects critical built-ins."

// ---

// ### 🔸 2. **"Why does `Math.PI = 4` not throw an error?"**

// You should say:

// > "In non-strict mode, JavaScript fails silently. In strict mode, it throws a `TypeError`. That’s because `Math.PI` is non-writable."

// ---

// ### 🔸 3. **"What are property descriptors?"**

// Perfect chance to say:

// > "Every property in JS has metadata: `writable`, `enumerable`, `configurable`, and `value`. You can check them with `Object.getOwnPropertyDescriptor()`."

// ---

// ### 🔸 4. **"Can you modify built-in objects?"**

// Smart answer:

// > "You *can* modify prototype methods like `Array.prototype.push`, but constants like `Math.PI` are protected."

// Then follow up with:

// > "But modifying built-ins in production code is strongly discouraged — it's called monkey-patching and it can break other libraries."

// 🔥 Bonus points if you mention **Proxies** as a way to intercept behavior.

// ---

// ## 💼 Will it come up in real interviews?

// | Company Type           | Will ask?  | Reason                                                         |
// | ---------------------- | ---------- | -------------------------------------------------------------- |
// | Big Tech (FAANG, etc.) | ⚠️ Maybe   | If you're interviewing for deep JS/frontend roles              |
// | Startups/Agencies      | ✅ Often    | They test your flexibility and how well you *actually* know JS |
// | Internships            | ✅ Possibly | Easy trap question to filter out copy-paste devs               |

// ---

// ## ✅ How YOU Should Answer (Interview-Ready)

// > "No, `Math.PI` is non-writable and non-configurable. It's defined as a constant on the `Math` object. I can prove that with `Object.getOwnPropertyDescriptor(Math, 'PI')`. Trying to overwrite it does nothing in non-strict mode and throws in strict mode."

// Then:

// > "If I *really* wanted a different value, I’d either shadow it locally or use a Proxy — but that’s mostly for fun or testing."

// **Boom. You’ve just impressed the hell out of them.**

// ---

// **German word of the day:**
// **eingefroren** – frozen
// (*Math.PI ist quasi eingefroren vom System.* – Math.PI is basically frozen by the system.)

// Want me to throw more **"sneaky but real"** interview JS questions your way so you can train like a beast?
