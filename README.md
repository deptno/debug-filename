# filename-logger

[debug](https://github.com/visionmedia/debug) wrapper. logging by filename.

```bash
  dynalee:operator/operator.js get undefined +0ms
  dynalee:model/model.js { id: 'hello2', detail: 'world' } +0ms
  dynalee:model/model.js Error: Item not found, hash(hello2, range(world)
```

## Install
```bash
npm i filename-logger
```

## Usage
```typescript
import createLogger from 'filename-logger'

const PROJECT_NAME = 'project'
const log = createLogger(PROJECT_NAME, __filename)

log('something')
```

or

```typescript
const PROJECT_NAME = 'project'
const createProjectLogger = createLogger(PROJECT_NAME)

const log = createProjectLogger(__filename)

log('something')
```

## License
MIT
