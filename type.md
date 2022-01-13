## **_tsconfig.json 기본셋팅_**

### sourceMap

sourcemap files 생성을 활성화합니다. 이러한 파일을 사용하면 방출된(emit) JavaScript 파일로 실제 작업을 할 때 디버거 및 기타 도구에서 원본 Typescript소스 코드를 표시할 수 있습니다. Source map 파일들은 해당 .js 출력 파일 옆에 .js.map(또는 .jsx.map)파일로 내보내집니다.

.js 파일들은 외부 도구에 대한 파일의 위치를 나타내는 소스맵 주석이 차례로 포함됩니다. 예를 들면 다음과 같습니다.

```jsx
// helloWorld.ts
export declare const helloWorld = "hi";
```

SourceMap을 true로 설정하여 컴파일하면 다음 Javascript파일이 생성됩니다.

```jsx
// helloWorld.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = "hi";
//# sourceMappingURL=// helloWorld.js.map
```

그리고 이것은 또한 이 json맵을 생성합니다.

```jsx
// helloWorld.js.map
{
  "version": 3,
  "file": "ex.js",
  "sourceRoot": "",
  "sources": ["../ex.ts"],
  "names": [],
  "mappings": ";;AAAa,QAAA,UAAU,GAAG,IAAI,CAAA"
}
```

### outDir

만약에 설정한다면, .js(뿐만 아니라 .d.ts, .js.map 기타등등) 파일이 이 디렉토리로 내보내집니다. 원본 소스 파일의 디렉토리 구조는 보존됩니다. 계산된 루트가 의도한 것과 다른경우 rootDir을 참조하세요.

지정하지 않으면 .js파일이 생성된 .ts 파일과 동일한 디렉토리에 생성됩니다.

### noImplicitAny

타입 주석이 없는 일부 경우, Typescript는 유형을 유추할 수 없는 경우 변수에 대해 any유형으로 돌아갑니다.

이로 인해 다음과 같은 몇가지 오류가 누락될 수 있습니다.

```jsx
function fn(s) {
  console.log(s.subtr(3)); // 문자열 메소드지만 에러가 발생하지 않는다.
}
fn(42);
```

noImplictAny를 켜면 Typescript는 다음 중 하나를 유추할 때마다 오류를 발생시킵니다.

```jsx
function fn(s) {
  // 매개변수's'는 암시적으로(implicitly) 모든 유형입니다.
  console.log(s.subtr(3));
}
```

### target

최신 브라우저는 모든 ES6 기능을 지원하므로 ES6이 좋은 선택입니다. 코드가 이전 환경에 배포된 경우 더 낮은 target을 설정하거나 최신 환경에서 코드 실행이 보장되는 경우 더 높은 target을 설정하도록 선택할 수 있습니다.

target설정은 어떤 JS기능이 하향 조정되고 어떤 것이 그대로 유지되는지 변경합니다. 예를 들어 화살표 함수는 target이 ES5이하이면 동등한 함수 표현식으로 변경됩니다.

### jsx

JSX구성이 Javascript 파일에서 내보내지는 방법을 제어합니다. 이것은 .tsx파일에서 시작된 JS파일의 출력에만 영향을 미칩니다.

- react: .js 파일을 동등한 React.createElement호출로 변경된 JSX파일로 배출합니다.
- react-jsx: JSX가 \_jsx호출로 변경된 .js파일을 배출합니다.

### allowJs

.ts 및 .tsx 파일 대신 JavaScript 파일을 프로젝트 내부로 가져올 수 있습니다. 예를 들어 이 JS 파일은 다음과 같습니다.

```jsx
// card.js 파일
export const defaultCardDeck = "Heart";
```

Typescript파일로 import될 때 에러를 발생할 것입니다.

```jsx
// index.ts 파일
import { defaultCardDeck } from "./card";
console.log(defaultCardDeck);
```

AllowJs를 설정하면 다음이 가능합니다.

```jsx
// index.ts 파일
import { defaultCardDeck } from "./card";

console.log(defaultCardDeck);
```

### moduleResolution

모듈이 해결되는 전략을 구체적으로 정하는 것입니다.

- Node.js의 `“node”` commonJS구현
- Typescript 4.5부터 Node.js의 ECMAScript 모듈 지원을 위한 `node12` 또는 `nodenext`
- `“Classic”` 은 1.6 release이전에 Typescript에서 사용되었습니다. 현대 코드에서 클래식을 사용할 필요는 없을 것입니다.

### allowSyntheticDefaultImports

true로 설정하면 allowSyntheticDefaultImports를 사용하여 다음과 같은 가져오기를 작성할 수 있습니다.

```jsx
import React from "react";
import * as React from "react"; // 대신에
```

모듈이 명시적으로 default export를 지정하지 않은 경우

예를 들어 allowSyntheticDefaultImports가 true인 경우

```jsx
// 파일 utilFunctions.js
Module '"/home/runner/work/TypeScript-Website/TypeScript-Website/utilFunctions"' has no default export.
const getStringLength = (str) => str.length;

module.exports = {
  getStringLength,
};

// 파일 index.ts
import utils from "./utilFunctions";

const count = utils.getStringLength("Check JS");
```

위의 코드는 import할 수 있는 default object가 없기 떄문에 에러를 발생시킵니다. 이것이 그래야 할 것 같으면서도, 편의를 위해 Babel과 같은 트랜스파일러는 default가 생성되어 있지 않은 경우 자동으로 default값을 생성합니다. 모듈을 다음과 같이 보이게 합니다.

```jsx
// 파일 utilFunctions.js
const getStringLength = (str) => str.length;
const allFunctions = {
  getStringLength,
};
module.exports = allFunctions;
module.exports.default = allFunctions;
```

### lib

Typescript에는 내장 JS API(예:Math)에 대한 기본 유형 정의 세트와 브라우저 환경에 있는 유형 정의가 포함되어 있습니다. Typescript에는 지정한 대상과 일치하는 최신 JS 기능을 위한 API도 포함되어 있습니다. 예를 들어 ES6 이상인 경우 맵에 대한 정의를 사용할 수 있습니다.

다음과 같은 몇 가지 이유로 변경할 수 있습니다.

- 프로그램이 브라우저에서 실행되지 않으므로 "dom" 유형 정의를 원하지 않습니다.
- 런타임 플랫폼은 특정 Javascript API 객체(폴리필을 통해 가능)를 제공하지만, 아직 주어진 ECMAScript 버전의 전체 구문을 지원하지 않습니다.
- 상위 수준 ECMASCript버전의 전부는 아니지만 일부에 대한 폴리필 또는 기본 구현이 있습니다.
- ESNext에서 사용할 수 있는 추가 API - Javascript사양이 발전함에 따라 변경됩니다.

### noEmit

Javascript 소스 코드, 소스 맵 또는 선언과 같은 컴파일러 출력 파일을 내보내면 안됩니다.

이것은 Babel 또는 swc와 같은 다른 도구가 TypeScript파일을 Javascript 환경 내에서 실행할 수 있는 파일로 변환하는 것을 처리할 공간을 만듭니다.

그런 다음 TypeScript를 편집기 통합을 제공하는 도구 및 소스 코드 유형 검사기로 사용할 수 있습니다.

### resolveJsonModule

노드 프로젝트에서 일반적으로 사용되는 확장자가 '.json'인 모듈을 가져올 수 있습니다. 여기에는 정적 JSON 형태를 기반으로 가져오기를 위한 유형 생성이 포함됩니다.

TypeScript는 기본적으로 JSON 파일 확인을 지원하지 않습니다.

### noFallthroughCasesInSwitch

switch문의 fallthrough(완료되지 못함)에 대한 에러를 보고합니다. switch문 내부에 비어 있지 않은 모든 경우에 `break` 또는 `return`이 포함되도록 합니다. 즉, fallthrough 버그를 배송하지 않습니다.

```jsx
const a: number = 6;

switch (a) {
  case 0:
    //Fallthrough case in switch.
    console.log("even");
  case 1:
    console.log("odd");
    break;
}
```

### forceConsistentCasingInFileNames

TypeScript는 실행 중인 파일 시스템의 대소문자 구분 규칙을 따릅니다. 일부 개발자는 대소문자를 구분하는 파일 시스템에서 작업하고 다른 개발자는 그렇지 않은 경우 문제가 될 수 있습니다. 파일이 ./FileManager.ts를 지정하여 fileManager.ts를 가져오려고 하면 파일은 대소문자를 구분하지 않는 파일 시스템에서 찾을 수 있지만 대소문자를 구분하는 파일 시스템에서는 찾을 수 없습니다.

이 옵션이 설정되면 프로그램이 디스크의 대소문자와 다른 대소문자를 사용하여 파일을 포함하려고 하면 TypeScript에서 오류가 발생합니다.

### esModuleInterop

기본적으로(esModuleInterop이 false이거나 설정되지 않은 경우) TypeScript는 CommonJS/AMD/UMD 모듈을 ES6 모듈과 유사하게 처리합니다. 이를 수행하는 데 특히 결함이 있는 가정으로 판명된 두 부분이 있습니다.

- import \* as moment from "moment"와 같은 네임스페이스 import는 const moment= require("moment")와 동일하게 작동합니다.
- import moment from "moment"와 같은 default import는 const moment=require("moment").default와 동일하게 작동합니다.

이러한 미스매치는 두 가지 이슈를 발생시킵니다.

- ES6모듈 사양은 네임스페이스 가져오기(import \* as x)는 Typescript가 이를 =require("x")와 동일하게 처리하도록 한 다음 Typescript에서 가져오기를 함수로 처리하고 호출이 가능합니다. 그것은 사양에 따라 유효하지 않습니다.
- ES6모듈 사양에는 정확하지만 CommonJs/AMD/UMD모듈이 있는 대부분의 라이브러리는 Typescript의 구현만큼 엄격하게 준수하지 않습니다.

### skipLibCheck

선언 파일의 유형 검사를 건너뜁니다.

이것은 유형 시스템의 정확도를 희생시키면서 컴파일하는 동안 시간을 절약할 수 있습니다. 예를 들어, 두 개의 라이브러리가 일관성 없는 방식으로 동일한 유형의 두 복사본을 정의할 수 있습니다. TypeScript는 모든 d.ts 파일의 전체 검사를 수행하는 대신 앱의 소스 코드에서 특별히 참조하는 코드를 유형 검사합니다.

참고: [https://www.typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig)
