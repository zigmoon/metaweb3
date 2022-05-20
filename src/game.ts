import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import Script2 from "../c72c3d45-0309-4834-84df-7b5f517694fa/src/item"
import Script3 from "../396e4247-6acd-406c-9272-046c65d0436c/src/item"
import Script4 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script5 from "../aff6ff37-d8c9-46f5-a9ac-14e524486ffe/src/item"
import Script6 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script7 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script8 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const squareCanopy2 = new Entity('squareCanopy2')
engine.addEntity(squareCanopy2)
squareCanopy2.setParent(_scene)
const gltfShape = new GLTFShape("bc789145-d689-4559-a1ff-71c2da79b7de/Canopy_01/Canopy_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
squareCanopy2.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(16.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy2.addComponentOrReplace(transform2)

const couchCurved = new Entity('couchCurved')
engine.addEntity(couchCurved)
couchCurved.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(34.5, 0, 30.5),
  rotation: new Quaternion(-3.2851078069173712e-15, -0.8819212913513184, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
couchCurved.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("2079fbe2-51e5-4fdf-82bd-37374422b2e3/CurvedCouch.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
couchCurved.addComponentOrReplace(gltfShape2)

const couchCurved2 = new Entity('couchCurved2')
engine.addEntity(couchCurved2)
couchCurved2.setParent(_scene)
couchCurved2.addComponentOrReplace(gltfShape2)
const transform4 = new Transform({
  position: new Vector3(36, 1.6209433795211226e-8, 25.5),
  rotation: new Quaternion(6.280379997525634e-15, -0.41228049993515015, 4.914766904562384e-8, 0.9110569953918457),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
couchCurved2.addComponentOrReplace(transform4)

const squareCanopy5 = new Entity('squareCanopy5')
engine.addEntity(squareCanopy5)
squareCanopy5.setParent(_scene)
squareCanopy5.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(9, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy5.addComponentOrReplace(transform5)

const videoScreenStanding = new Entity('videoScreenStanding')
engine.addEntity(videoScreenStanding)
videoScreenStanding.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(29.5, 0, 28),
  rotation: new Quaternion(6.48387098101577e-16, 0.7592363357543945, -9.050800997556507e-8, 0.6508150100708008),
  scale: new Vector3(1.0000020265579224, 1, 1.0000020265579224)
})
videoScreenStanding.addComponentOrReplace(transform6)

const couchCurved3 = new Entity('couchCurved3')
engine.addEntity(couchCurved3)
couchCurved3.setParent(_scene)
couchCurved3.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(39.5, 1.6209433795211226e-8, 23),
  rotation: new Quaternion(7.582406009760002e-15, -0.3209960460662842, 3.8265717705598945e-8, 0.9470805525779724),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
couchCurved3.addComponentOrReplace(transform7)

const couchCurved4 = new Entity('couchCurved4')
engine.addEntity(couchCurved4)
couchCurved4.setParent(_scene)
couchCurved4.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(40, 0, 28),
  rotation: new Quaternion(-6.9578051850041015e-15, -0.7046929001808167, 8.400593998203476e-8, 0.7095125317573547),
  scale: new Vector3(1.0000027418136597, 1, 1.0000027418136597)
})
couchCurved4.addComponentOrReplace(transform8)

const couchCurved5 = new Entity('couchCurved5')
engine.addEntity(couchCurved5)
couchCurved5.setParent(_scene)
couchCurved5.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(37.5, 1.6209433795211226e-8, 32.5),
  rotation: new Quaternion(-3.201806351719647e-15, -0.8966655731201172, 1.0689087304172062e-7, 0.4427086412906647),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
couchCurved5.addComponentOrReplace(transform9)

const couchCurved6 = new Entity('couchCurved6')
engine.addEntity(couchCurved6)
couchCurved6.setParent(_scene)
couchCurved6.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(40.5, 1.6209433795211226e-8, 19.5),
  rotation: new Quaternion(7.582406009760002e-15, -0.3209960460662842, 3.8265717705598945e-8, 0.9470805525779724),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
couchCurved6.addComponentOrReplace(transform10)

const couchCurved7 = new Entity('couchCurved7')
engine.addEntity(couchCurved7)
couchCurved7.setParent(_scene)
couchCurved7.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(43.5, 1.6209433795211226e-8, 24.5),
  rotation: new Quaternion(3.874936446880825e-15, -0.5457485914230347, 6.505830896230691e-8, 0.8379490375518799),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
couchCurved7.addComponentOrReplace(transform11)

const couchCurved8 = new Entity('couchCurved8')
engine.addEntity(couchCurved8)
couchCurved8.setParent(_scene)
couchCurved8.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(43, 1.6209433795211226e-8, 30.5),
  rotation: new Quaternion(2.419443470015706e-16, -0.7707275152206421, 9.187788663211904e-8, 0.6371649503707886),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
couchCurved8.addComponentOrReplace(transform12)

const couchCurved9 = new Entity('couchCurved9')
engine.addEntity(couchCurved9)
couchCurved9.setParent(_scene)
couchCurved9.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(39.5, 1.6209433795211226e-8, 35),
  rotation: new Quaternion(-5.828195693798662e-15, -0.9361882209777832, 1.116023398139987e-7, 0.3514993190765381),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
couchCurved9.addComponentOrReplace(transform13)

const squareCanopy = new Entity('squareCanopy')
engine.addEntity(squareCanopy)
squareCanopy.setParent(_scene)
squareCanopy.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(32.25, 0, 45.75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy.addComponentOrReplace(transform14)

const squareCanopy3 = new Entity('squareCanopy3')
engine.addEntity(squareCanopy3)
squareCanopy3.setParent(_scene)
squareCanopy3.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy3.addComponentOrReplace(transform15)

const squareCanopy4 = new Entity('squareCanopy4')
engine.addEntity(squareCanopy4)
squareCanopy4.setParent(_scene)
squareCanopy4.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(24.837608337402344, 0, 58.45895767211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy4.addComponentOrReplace(transform16)

const squareCanopy6 = new Entity('squareCanopy6')
engine.addEntity(squareCanopy6)
squareCanopy6.setParent(_scene)
squareCanopy6.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(32.587608337402344, 0, 58.20895767211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy6.addComponentOrReplace(transform17)

const squareCanopy7 = new Entity('squareCanopy7')
engine.addEntity(squareCanopy7)
squareCanopy7.setParent(_scene)
squareCanopy7.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(16.837608337402344, 0, 58.45895767211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy7.addComponentOrReplace(transform18)

const squareCanopy8 = new Entity('squareCanopy8')
engine.addEntity(squareCanopy8)
squareCanopy8.setParent(_scene)
squareCanopy8.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(9.337608337402344, 0, 58.45895767211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy8.addComponentOrReplace(transform19)

const woodTile = new Entity('woodTile')
engine.addEntity(woodTile)
woodTile.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(36.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile.addComponentOrReplace(transform20)
const gltfShape3 = new GLTFShape("df6bc5c0-5989-4251-8d1f-38edcf9c9beb/FloorBlock_03/FloorBlock_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
woodTile.addComponentOrReplace(gltfShape3)

const woodTile2 = new Entity('woodTile2')
engine.addEntity(woodTile2)
woodTile2.setParent(_scene)
woodTile2.addComponentOrReplace(gltfShape3)
const transform21 = new Transform({
  position: new Vector3(36.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile2.addComponentOrReplace(transform21)

const woodTile3 = new Entity('woodTile3')
engine.addEntity(woodTile3)
woodTile3.setParent(_scene)
woodTile3.addComponentOrReplace(gltfShape3)
const transform22 = new Transform({
  position: new Vector3(34.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile3.addComponentOrReplace(transform22)

const woodTile4 = new Entity('woodTile4')
engine.addEntity(woodTile4)
woodTile4.setParent(_scene)
woodTile4.addComponentOrReplace(gltfShape3)
const transform23 = new Transform({
  position: new Vector3(34.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile4.addComponentOrReplace(transform23)

const woodTile5 = new Entity('woodTile5')
engine.addEntity(woodTile5)
woodTile5.setParent(_scene)
woodTile5.addComponentOrReplace(gltfShape3)
const transform24 = new Transform({
  position: new Vector3(32.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile5.addComponentOrReplace(transform24)

const woodTile6 = new Entity('woodTile6')
engine.addEntity(woodTile6)
woodTile6.setParent(_scene)
woodTile6.addComponentOrReplace(gltfShape3)
const transform25 = new Transform({
  position: new Vector3(32.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile6.addComponentOrReplace(transform25)

const woodTile7 = new Entity('woodTile7')
engine.addEntity(woodTile7)
woodTile7.setParent(_scene)
woodTile7.addComponentOrReplace(gltfShape3)
const transform26 = new Transform({
  position: new Vector3(30.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile7.addComponentOrReplace(transform26)

const woodTile8 = new Entity('woodTile8')
engine.addEntity(woodTile8)
woodTile8.setParent(_scene)
woodTile8.addComponentOrReplace(gltfShape3)
const transform27 = new Transform({
  position: new Vector3(30.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile8.addComponentOrReplace(transform27)

const woodTile9 = new Entity('woodTile9')
engine.addEntity(woodTile9)
woodTile9.setParent(_scene)
woodTile9.addComponentOrReplace(gltfShape3)
const transform28 = new Transform({
  position: new Vector3(22.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile9.addComponentOrReplace(transform28)

const woodTile10 = new Entity('woodTile10')
engine.addEntity(woodTile10)
woodTile10.setParent(_scene)
woodTile10.addComponentOrReplace(gltfShape3)
const transform29 = new Transform({
  position: new Vector3(22.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile10.addComponentOrReplace(transform29)

const woodTile11 = new Entity('woodTile11')
engine.addEntity(woodTile11)
woodTile11.setParent(_scene)
woodTile11.addComponentOrReplace(gltfShape3)
const transform30 = new Transform({
  position: new Vector3(24.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile11.addComponentOrReplace(transform30)

const woodTile12 = new Entity('woodTile12')
engine.addEntity(woodTile12)
woodTile12.setParent(_scene)
woodTile12.addComponentOrReplace(gltfShape3)
const transform31 = new Transform({
  position: new Vector3(24.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile12.addComponentOrReplace(transform31)

const woodTile13 = new Entity('woodTile13')
engine.addEntity(woodTile13)
woodTile13.setParent(_scene)
woodTile13.addComponentOrReplace(gltfShape3)
const transform32 = new Transform({
  position: new Vector3(26.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile13.addComponentOrReplace(transform32)

const woodTile14 = new Entity('woodTile14')
engine.addEntity(woodTile14)
woodTile14.setParent(_scene)
woodTile14.addComponentOrReplace(gltfShape3)
const transform33 = new Transform({
  position: new Vector3(26.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile14.addComponentOrReplace(transform33)

const woodTile15 = new Entity('woodTile15')
engine.addEntity(woodTile15)
woodTile15.setParent(_scene)
woodTile15.addComponentOrReplace(gltfShape3)
const transform34 = new Transform({
  position: new Vector3(28.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile15.addComponentOrReplace(transform34)

const woodTile16 = new Entity('woodTile16')
engine.addEntity(woodTile16)
woodTile16.setParent(_scene)
woodTile16.addComponentOrReplace(gltfShape3)
const transform35 = new Transform({
  position: new Vector3(28.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile16.addComponentOrReplace(transform35)

const woodTile17 = new Entity('woodTile17')
engine.addEntity(woodTile17)
woodTile17.setParent(_scene)
woodTile17.addComponentOrReplace(gltfShape3)
const transform36 = new Transform({
  position: new Vector3(20.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile17.addComponentOrReplace(transform36)

const woodTile18 = new Entity('woodTile18')
engine.addEntity(woodTile18)
woodTile18.setParent(_scene)
woodTile18.addComponentOrReplace(gltfShape3)
const transform37 = new Transform({
  position: new Vector3(20.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile18.addComponentOrReplace(transform37)

const woodTile19 = new Entity('woodTile19')
engine.addEntity(woodTile19)
woodTile19.setParent(_scene)
woodTile19.addComponentOrReplace(gltfShape3)
const transform38 = new Transform({
  position: new Vector3(18.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile19.addComponentOrReplace(transform38)

const woodTile20 = new Entity('woodTile20')
engine.addEntity(woodTile20)
woodTile20.setParent(_scene)
woodTile20.addComponentOrReplace(gltfShape3)
const transform39 = new Transform({
  position: new Vector3(18.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile20.addComponentOrReplace(transform39)

const woodTile21 = new Entity('woodTile21')
engine.addEntity(woodTile21)
woodTile21.setParent(_scene)
woodTile21.addComponentOrReplace(gltfShape3)
const transform40 = new Transform({
  position: new Vector3(16.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile21.addComponentOrReplace(transform40)

const woodTile22 = new Entity('woodTile22')
engine.addEntity(woodTile22)
woodTile22.setParent(_scene)
woodTile22.addComponentOrReplace(gltfShape3)
const transform41 = new Transform({
  position: new Vector3(14.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile22.addComponentOrReplace(transform41)

const woodTile23 = new Entity('woodTile23')
engine.addEntity(woodTile23)
woodTile23.setParent(_scene)
woodTile23.addComponentOrReplace(gltfShape3)
const transform42 = new Transform({
  position: new Vector3(14.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile23.addComponentOrReplace(transform42)

const woodTile24 = new Entity('woodTile24')
engine.addEntity(woodTile24)
woodTile24.setParent(_scene)
woodTile24.addComponentOrReplace(gltfShape3)
const transform43 = new Transform({
  position: new Vector3(16.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile24.addComponentOrReplace(transform43)

const woodTile25 = new Entity('woodTile25')
engine.addEntity(woodTile25)
woodTile25.setParent(_scene)
woodTile25.addComponentOrReplace(gltfShape3)
const transform44 = new Transform({
  position: new Vector3(10.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile25.addComponentOrReplace(transform44)

const woodTile26 = new Entity('woodTile26')
engine.addEntity(woodTile26)
woodTile26.setParent(_scene)
woodTile26.addComponentOrReplace(gltfShape3)
const transform45 = new Transform({
  position: new Vector3(10.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile26.addComponentOrReplace(transform45)

const woodTile27 = new Entity('woodTile27')
engine.addEntity(woodTile27)
woodTile27.setParent(_scene)
woodTile27.addComponentOrReplace(gltfShape3)
const transform46 = new Transform({
  position: new Vector3(12.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile27.addComponentOrReplace(transform46)

const woodTile28 = new Entity('woodTile28')
engine.addEntity(woodTile28)
woodTile28.setParent(_scene)
woodTile28.addComponentOrReplace(gltfShape3)
const transform47 = new Transform({
  position: new Vector3(12.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile28.addComponentOrReplace(transform47)

const woodTile29 = new Entity('woodTile29')
engine.addEntity(woodTile29)
woodTile29.setParent(_scene)
woodTile29.addComponentOrReplace(gltfShape3)
const transform48 = new Transform({
  position: new Vector3(6.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile29.addComponentOrReplace(transform48)

const woodTile30 = new Entity('woodTile30')
engine.addEntity(woodTile30)
woodTile30.setParent(_scene)
woodTile30.addComponentOrReplace(gltfShape3)
const transform49 = new Transform({
  position: new Vector3(6.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile30.addComponentOrReplace(transform49)

const woodTile31 = new Entity('woodTile31')
engine.addEntity(woodTile31)
woodTile31.setParent(_scene)
woodTile31.addComponentOrReplace(gltfShape3)
const transform50 = new Transform({
  position: new Vector3(8.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile31.addComponentOrReplace(transform50)

const woodTile32 = new Entity('woodTile32')
engine.addEntity(woodTile32)
woodTile32.setParent(_scene)
woodTile32.addComponentOrReplace(gltfShape3)
const transform51 = new Transform({
  position: new Vector3(8.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile32.addComponentOrReplace(transform51)

const woodTile33 = new Entity('woodTile33')
engine.addEntity(woodTile33)
woodTile33.setParent(_scene)
woodTile33.addComponentOrReplace(gltfShape3)
const transform52 = new Transform({
  position: new Vector3(2.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile33.addComponentOrReplace(transform52)

const woodTile34 = new Entity('woodTile34')
engine.addEntity(woodTile34)
woodTile34.setParent(_scene)
woodTile34.addComponentOrReplace(gltfShape3)
const transform53 = new Transform({
  position: new Vector3(2.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile34.addComponentOrReplace(transform53)

const woodTile35 = new Entity('woodTile35')
engine.addEntity(woodTile35)
woodTile35.setParent(_scene)
woodTile35.addComponentOrReplace(gltfShape3)
const transform54 = new Transform({
  position: new Vector3(4.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile35.addComponentOrReplace(transform54)

const woodTile36 = new Entity('woodTile36')
engine.addEntity(woodTile36)
woodTile36.setParent(_scene)
woodTile36.addComponentOrReplace(gltfShape3)
const transform55 = new Transform({
  position: new Vector3(4.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile36.addComponentOrReplace(transform55)

const woodTile37 = new Entity('woodTile37')
engine.addEntity(woodTile37)
woodTile37.setParent(_scene)
woodTile37.addComponentOrReplace(gltfShape3)
const transform56 = new Transform({
  position: new Vector3(2.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile37.addComponentOrReplace(transform56)

const woodTile38 = new Entity('woodTile38')
engine.addEntity(woodTile38)
woodTile38.setParent(_scene)
woodTile38.addComponentOrReplace(gltfShape3)
const transform57 = new Transform({
  position: new Vector3(2.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile38.addComponentOrReplace(transform57)

const woodTile39 = new Entity('woodTile39')
engine.addEntity(woodTile39)
woodTile39.setParent(_scene)
woodTile39.addComponentOrReplace(gltfShape3)
const transform58 = new Transform({
  position: new Vector3(4.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile39.addComponentOrReplace(transform58)

const woodTile40 = new Entity('woodTile40')
engine.addEntity(woodTile40)
woodTile40.setParent(_scene)
woodTile40.addComponentOrReplace(gltfShape3)
const transform59 = new Transform({
  position: new Vector3(4.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile40.addComponentOrReplace(transform59)

const woodTile41 = new Entity('woodTile41')
engine.addEntity(woodTile41)
woodTile41.setParent(_scene)
woodTile41.addComponentOrReplace(gltfShape3)
const transform60 = new Transform({
  position: new Vector3(2.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile41.addComponentOrReplace(transform60)

const woodTile42 = new Entity('woodTile42')
engine.addEntity(woodTile42)
woodTile42.setParent(_scene)
woodTile42.addComponentOrReplace(gltfShape3)
const transform61 = new Transform({
  position: new Vector3(2.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile42.addComponentOrReplace(transform61)

const woodTile43 = new Entity('woodTile43')
engine.addEntity(woodTile43)
woodTile43.setParent(_scene)
woodTile43.addComponentOrReplace(gltfShape3)
const transform62 = new Transform({
  position: new Vector3(4.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile43.addComponentOrReplace(transform62)

const woodTile44 = new Entity('woodTile44')
engine.addEntity(woodTile44)
woodTile44.setParent(_scene)
woodTile44.addComponentOrReplace(gltfShape3)
const transform63 = new Transform({
  position: new Vector3(4.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile44.addComponentOrReplace(transform63)

const woodTile45 = new Entity('woodTile45')
engine.addEntity(woodTile45)
woodTile45.setParent(_scene)
woodTile45.addComponentOrReplace(gltfShape3)
const transform64 = new Transform({
  position: new Vector3(2.5, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile45.addComponentOrReplace(transform64)

const woodTile46 = new Entity('woodTile46')
engine.addEntity(woodTile46)
woodTile46.setParent(_scene)
woodTile46.addComponentOrReplace(gltfShape3)
const transform65 = new Transform({
  position: new Vector3(2.5, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile46.addComponentOrReplace(transform65)

const woodTile47 = new Entity('woodTile47')
engine.addEntity(woodTile47)
woodTile47.setParent(_scene)
woodTile47.addComponentOrReplace(gltfShape3)
const transform66 = new Transform({
  position: new Vector3(4.5, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile47.addComponentOrReplace(transform66)

const woodTile48 = new Entity('woodTile48')
engine.addEntity(woodTile48)
woodTile48.setParent(_scene)
woodTile48.addComponentOrReplace(gltfShape3)
const transform67 = new Transform({
  position: new Vector3(4.5, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile48.addComponentOrReplace(transform67)

const woodTile49 = new Entity('woodTile49')
engine.addEntity(woodTile49)
woodTile49.setParent(_scene)
woodTile49.addComponentOrReplace(gltfShape3)
const transform68 = new Transform({
  position: new Vector3(4.5, 0, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile49.addComponentOrReplace(transform68)

const woodTile50 = new Entity('woodTile50')
engine.addEntity(woodTile50)
woodTile50.setParent(_scene)
woodTile50.addComponentOrReplace(gltfShape3)
const transform69 = new Transform({
  position: new Vector3(2.5, 0, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile50.addComponentOrReplace(transform69)

const woodTile51 = new Entity('woodTile51')
engine.addEntity(woodTile51)
woodTile51.setParent(_scene)
woodTile51.addComponentOrReplace(gltfShape3)
const transform70 = new Transform({
  position: new Vector3(2.5, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile51.addComponentOrReplace(transform70)

const woodTile52 = new Entity('woodTile52')
engine.addEntity(woodTile52)
woodTile52.setParent(_scene)
woodTile52.addComponentOrReplace(gltfShape3)
const transform71 = new Transform({
  position: new Vector3(4.5, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile52.addComponentOrReplace(transform71)

const woodTile53 = new Entity('woodTile53')
engine.addEntity(woodTile53)
woodTile53.setParent(_scene)
woodTile53.addComponentOrReplace(gltfShape3)
const transform72 = new Transform({
  position: new Vector3(2.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile53.addComponentOrReplace(transform72)

const woodTile54 = new Entity('woodTile54')
engine.addEntity(woodTile54)
woodTile54.setParent(_scene)
woodTile54.addComponentOrReplace(gltfShape3)
const transform73 = new Transform({
  position: new Vector3(2.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile54.addComponentOrReplace(transform73)

const woodTile55 = new Entity('woodTile55')
engine.addEntity(woodTile55)
woodTile55.setParent(_scene)
woodTile55.addComponentOrReplace(gltfShape3)
const transform74 = new Transform({
  position: new Vector3(4.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile55.addComponentOrReplace(transform74)

const woodTile56 = new Entity('woodTile56')
engine.addEntity(woodTile56)
woodTile56.setParent(_scene)
woodTile56.addComponentOrReplace(gltfShape3)
const transform75 = new Transform({
  position: new Vector3(4.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile56.addComponentOrReplace(transform75)

const woodTile57 = new Entity('woodTile57')
engine.addEntity(woodTile57)
woodTile57.setParent(_scene)
woodTile57.addComponentOrReplace(gltfShape3)
const transform76 = new Transform({
  position: new Vector3(4.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile57.addComponentOrReplace(transform76)

const woodTile58 = new Entity('woodTile58')
engine.addEntity(woodTile58)
woodTile58.setParent(_scene)
woodTile58.addComponentOrReplace(gltfShape3)
const transform77 = new Transform({
  position: new Vector3(2.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile58.addComponentOrReplace(transform77)

const woodTile59 = new Entity('woodTile59')
engine.addEntity(woodTile59)
woodTile59.setParent(_scene)
woodTile59.addComponentOrReplace(gltfShape3)
const transform78 = new Transform({
  position: new Vector3(2.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile59.addComponentOrReplace(transform78)

const woodTile60 = new Entity('woodTile60')
engine.addEntity(woodTile60)
woodTile60.setParent(_scene)
woodTile60.addComponentOrReplace(gltfShape3)
const transform79 = new Transform({
  position: new Vector3(4.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile60.addComponentOrReplace(transform79)

const woodTile61 = new Entity('woodTile61')
engine.addEntity(woodTile61)
woodTile61.setParent(_scene)
woodTile61.addComponentOrReplace(gltfShape3)
const transform80 = new Transform({
  position: new Vector3(4.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile61.addComponentOrReplace(transform80)

const woodTile62 = new Entity('woodTile62')
engine.addEntity(woodTile62)
woodTile62.setParent(_scene)
woodTile62.addComponentOrReplace(gltfShape3)
const transform81 = new Transform({
  position: new Vector3(4.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile62.addComponentOrReplace(transform81)

const woodTile63 = new Entity('woodTile63')
engine.addEntity(woodTile63)
woodTile63.setParent(_scene)
woodTile63.addComponentOrReplace(gltfShape3)
const transform82 = new Transform({
  position: new Vector3(2.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile63.addComponentOrReplace(transform82)

const woodTile64 = new Entity('woodTile64')
engine.addEntity(woodTile64)
woodTile64.setParent(_scene)
woodTile64.addComponentOrReplace(gltfShape3)
const transform83 = new Transform({
  position: new Vector3(2.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile64.addComponentOrReplace(transform83)

const woodTile65 = new Entity('woodTile65')
engine.addEntity(woodTile65)
woodTile65.setParent(_scene)
woodTile65.addComponentOrReplace(gltfShape3)
const transform84 = new Transform({
  position: new Vector3(2.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile65.addComponentOrReplace(transform84)

const woodTile66 = new Entity('woodTile66')
engine.addEntity(woodTile66)
woodTile66.setParent(_scene)
woodTile66.addComponentOrReplace(gltfShape3)
const transform85 = new Transform({
  position: new Vector3(4.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile66.addComponentOrReplace(transform85)

const woodTile67 = new Entity('woodTile67')
engine.addEntity(woodTile67)
woodTile67.setParent(_scene)
woodTile67.addComponentOrReplace(gltfShape3)
const transform86 = new Transform({
  position: new Vector3(4.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile67.addComponentOrReplace(transform86)

const woodTile68 = new Entity('woodTile68')
engine.addEntity(woodTile68)
woodTile68.setParent(_scene)
woodTile68.addComponentOrReplace(gltfShape3)
const transform87 = new Transform({
  position: new Vector3(2.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile68.addComponentOrReplace(transform87)

const woodTile69 = new Entity('woodTile69')
engine.addEntity(woodTile69)
woodTile69.setParent(_scene)
woodTile69.addComponentOrReplace(gltfShape3)
const transform88 = new Transform({
  position: new Vector3(4.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile69.addComponentOrReplace(transform88)

const woodTile70 = new Entity('woodTile70')
engine.addEntity(woodTile70)
woodTile70.setParent(_scene)
woodTile70.addComponentOrReplace(gltfShape3)
const transform89 = new Transform({
  position: new Vector3(2.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile70.addComponentOrReplace(transform89)

const woodTile71 = new Entity('woodTile71')
engine.addEntity(woodTile71)
woodTile71.setParent(_scene)
woodTile71.addComponentOrReplace(gltfShape3)
const transform90 = new Transform({
  position: new Vector3(2.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile71.addComponentOrReplace(transform90)

const woodTile72 = new Entity('woodTile72')
engine.addEntity(woodTile72)
woodTile72.setParent(_scene)
woodTile72.addComponentOrReplace(gltfShape3)
const transform91 = new Transform({
  position: new Vector3(2.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile72.addComponentOrReplace(transform91)

const woodTile73 = new Entity('woodTile73')
engine.addEntity(woodTile73)
woodTile73.setParent(_scene)
woodTile73.addComponentOrReplace(gltfShape3)
const transform92 = new Transform({
  position: new Vector3(4.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile73.addComponentOrReplace(transform92)

const woodTile74 = new Entity('woodTile74')
engine.addEntity(woodTile74)
woodTile74.setParent(_scene)
woodTile74.addComponentOrReplace(gltfShape3)
const transform93 = new Transform({
  position: new Vector3(6.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile74.addComponentOrReplace(transform93)

const woodTile75 = new Entity('woodTile75')
engine.addEntity(woodTile75)
woodTile75.setParent(_scene)
woodTile75.addComponentOrReplace(gltfShape3)
const transform94 = new Transform({
  position: new Vector3(4.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile75.addComponentOrReplace(transform94)

const woodTile76 = new Entity('woodTile76')
engine.addEntity(woodTile76)
woodTile76.setParent(_scene)
woodTile76.addComponentOrReplace(gltfShape3)
const transform95 = new Transform({
  position: new Vector3(8.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile76.addComponentOrReplace(transform95)

const woodTile77 = new Entity('woodTile77')
engine.addEntity(woodTile77)
woodTile77.setParent(_scene)
woodTile77.addComponentOrReplace(gltfShape3)
const transform96 = new Transform({
  position: new Vector3(6.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile77.addComponentOrReplace(transform96)

const woodTile78 = new Entity('woodTile78')
engine.addEntity(woodTile78)
woodTile78.setParent(_scene)
woodTile78.addComponentOrReplace(gltfShape3)
const transform97 = new Transform({
  position: new Vector3(8.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile78.addComponentOrReplace(transform97)

const woodTile79 = new Entity('woodTile79')
engine.addEntity(woodTile79)
woodTile79.setParent(_scene)
woodTile79.addComponentOrReplace(gltfShape3)
const transform98 = new Transform({
  position: new Vector3(10.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile79.addComponentOrReplace(transform98)

const woodTile80 = new Entity('woodTile80')
engine.addEntity(woodTile80)
woodTile80.setParent(_scene)
woodTile80.addComponentOrReplace(gltfShape3)
const transform99 = new Transform({
  position: new Vector3(10.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile80.addComponentOrReplace(transform99)

const woodTile81 = new Entity('woodTile81')
engine.addEntity(woodTile81)
woodTile81.setParent(_scene)
woodTile81.addComponentOrReplace(gltfShape3)
const transform100 = new Transform({
  position: new Vector3(12.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile81.addComponentOrReplace(transform100)

const woodTile82 = new Entity('woodTile82')
engine.addEntity(woodTile82)
woodTile82.setParent(_scene)
woodTile82.addComponentOrReplace(gltfShape3)
const transform101 = new Transform({
  position: new Vector3(12.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile82.addComponentOrReplace(transform101)

const woodTile83 = new Entity('woodTile83')
engine.addEntity(woodTile83)
woodTile83.setParent(_scene)
woodTile83.addComponentOrReplace(gltfShape3)
const transform102 = new Transform({
  position: new Vector3(14.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile83.addComponentOrReplace(transform102)

const woodTile84 = new Entity('woodTile84')
engine.addEntity(woodTile84)
woodTile84.setParent(_scene)
woodTile84.addComponentOrReplace(gltfShape3)
const transform103 = new Transform({
  position: new Vector3(14.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile84.addComponentOrReplace(transform103)

const woodTile85 = new Entity('woodTile85')
engine.addEntity(woodTile85)
woodTile85.setParent(_scene)
woodTile85.addComponentOrReplace(gltfShape3)
const transform104 = new Transform({
  position: new Vector3(18.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile85.addComponentOrReplace(transform104)

const woodTile86 = new Entity('woodTile86')
engine.addEntity(woodTile86)
woodTile86.setParent(_scene)
woodTile86.addComponentOrReplace(gltfShape3)
const transform105 = new Transform({
  position: new Vector3(18.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile86.addComponentOrReplace(transform105)

const woodTile87 = new Entity('woodTile87')
engine.addEntity(woodTile87)
woodTile87.setParent(_scene)
woodTile87.addComponentOrReplace(gltfShape3)
const transform106 = new Transform({
  position: new Vector3(16.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile87.addComponentOrReplace(transform106)

const woodTile88 = new Entity('woodTile88')
engine.addEntity(woodTile88)
woodTile88.setParent(_scene)
woodTile88.addComponentOrReplace(gltfShape3)
const transform107 = new Transform({
  position: new Vector3(16.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile88.addComponentOrReplace(transform107)

const woodTile89 = new Entity('woodTile89')
engine.addEntity(woodTile89)
woodTile89.setParent(_scene)
woodTile89.addComponentOrReplace(gltfShape3)
const transform108 = new Transform({
  position: new Vector3(20.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile89.addComponentOrReplace(transform108)

const woodTile90 = new Entity('woodTile90')
engine.addEntity(woodTile90)
woodTile90.setParent(_scene)
woodTile90.addComponentOrReplace(gltfShape3)
const transform109 = new Transform({
  position: new Vector3(20.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile90.addComponentOrReplace(transform109)

const woodTile91 = new Entity('woodTile91')
engine.addEntity(woodTile91)
woodTile91.setParent(_scene)
woodTile91.addComponentOrReplace(gltfShape3)
const transform110 = new Transform({
  position: new Vector3(20.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile91.addComponentOrReplace(transform110)

const woodTile92 = new Entity('woodTile92')
engine.addEntity(woodTile92)
woodTile92.setParent(_scene)
woodTile92.addComponentOrReplace(gltfShape3)
const transform111 = new Transform({
  position: new Vector3(18.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile92.addComponentOrReplace(transform111)

const woodTile93 = new Entity('woodTile93')
engine.addEntity(woodTile93)
woodTile93.setParent(_scene)
woodTile93.addComponentOrReplace(gltfShape3)
const transform112 = new Transform({
  position: new Vector3(18.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile93.addComponentOrReplace(transform112)

const woodTile94 = new Entity('woodTile94')
engine.addEntity(woodTile94)
woodTile94.setParent(_scene)
woodTile94.addComponentOrReplace(gltfShape3)
const transform113 = new Transform({
  position: new Vector3(20.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile94.addComponentOrReplace(transform113)

const woodTile95 = new Entity('woodTile95')
engine.addEntity(woodTile95)
woodTile95.setParent(_scene)
woodTile95.addComponentOrReplace(gltfShape3)
const transform114 = new Transform({
  position: new Vector3(22.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile95.addComponentOrReplace(transform114)

const woodTile96 = new Entity('woodTile96')
engine.addEntity(woodTile96)
woodTile96.setParent(_scene)
woodTile96.addComponentOrReplace(gltfShape3)
const transform115 = new Transform({
  position: new Vector3(24.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile96.addComponentOrReplace(transform115)

const woodTile97 = new Entity('woodTile97')
engine.addEntity(woodTile97)
woodTile97.setParent(_scene)
woodTile97.addComponentOrReplace(gltfShape3)
const transform116 = new Transform({
  position: new Vector3(22.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile97.addComponentOrReplace(transform116)

const woodTile98 = new Entity('woodTile98')
engine.addEntity(woodTile98)
woodTile98.setParent(_scene)
woodTile98.addComponentOrReplace(gltfShape3)
const transform117 = new Transform({
  position: new Vector3(24.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile98.addComponentOrReplace(transform117)

const woodTile99 = new Entity('woodTile99')
engine.addEntity(woodTile99)
woodTile99.setParent(_scene)
woodTile99.addComponentOrReplace(gltfShape3)
const transform118 = new Transform({
  position: new Vector3(26.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile99.addComponentOrReplace(transform118)

const woodTile100 = new Entity('woodTile100')
engine.addEntity(woodTile100)
woodTile100.setParent(_scene)
woodTile100.addComponentOrReplace(gltfShape3)
const transform119 = new Transform({
  position: new Vector3(28.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile100.addComponentOrReplace(transform119)

const woodTile101 = new Entity('woodTile101')
engine.addEntity(woodTile101)
woodTile101.setParent(_scene)
woodTile101.addComponentOrReplace(gltfShape3)
const transform120 = new Transform({
  position: new Vector3(26.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile101.addComponentOrReplace(transform120)

const woodTile102 = new Entity('woodTile102')
engine.addEntity(woodTile102)
woodTile102.setParent(_scene)
woodTile102.addComponentOrReplace(gltfShape3)
const transform121 = new Transform({
  position: new Vector3(28.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile102.addComponentOrReplace(transform121)

const woodTile103 = new Entity('woodTile103')
engine.addEntity(woodTile103)
woodTile103.setParent(_scene)
woodTile103.addComponentOrReplace(gltfShape3)
const transform122 = new Transform({
  position: new Vector3(34.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile103.addComponentOrReplace(transform122)

const woodTile104 = new Entity('woodTile104')
engine.addEntity(woodTile104)
woodTile104.setParent(_scene)
woodTile104.addComponentOrReplace(gltfShape3)
const transform123 = new Transform({
  position: new Vector3(34.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile104.addComponentOrReplace(transform123)

const woodTile105 = new Entity('woodTile105')
engine.addEntity(woodTile105)
woodTile105.setParent(_scene)
woodTile105.addComponentOrReplace(gltfShape3)
const transform124 = new Transform({
  position: new Vector3(32.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile105.addComponentOrReplace(transform124)

const woodTile106 = new Entity('woodTile106')
engine.addEntity(woodTile106)
woodTile106.setParent(_scene)
woodTile106.addComponentOrReplace(gltfShape3)
const transform125 = new Transform({
  position: new Vector3(32.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile106.addComponentOrReplace(transform125)

const woodTile107 = new Entity('woodTile107')
engine.addEntity(woodTile107)
woodTile107.setParent(_scene)
woodTile107.addComponentOrReplace(gltfShape3)
const transform126 = new Transform({
  position: new Vector3(30.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile107.addComponentOrReplace(transform126)

const woodTile108 = new Entity('woodTile108')
engine.addEntity(woodTile108)
woodTile108.setParent(_scene)
woodTile108.addComponentOrReplace(gltfShape3)
const transform127 = new Transform({
  position: new Vector3(30.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile108.addComponentOrReplace(transform127)

const woodTile111 = new Entity('woodTile111')
engine.addEntity(woodTile111)
woodTile111.setParent(_scene)
woodTile111.addComponentOrReplace(gltfShape3)
const transform128 = new Transform({
  position: new Vector3(46.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile111.addComponentOrReplace(transform128)

const woodTile112 = new Entity('woodTile112')
engine.addEntity(woodTile112)
woodTile112.setParent(_scene)
woodTile112.addComponentOrReplace(gltfShape3)
const transform129 = new Transform({
  position: new Vector3(46.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile112.addComponentOrReplace(transform129)

const woodTile113 = new Entity('woodTile113')
engine.addEntity(woodTile113)
woodTile113.setParent(_scene)
woodTile113.addComponentOrReplace(gltfShape3)
const transform130 = new Transform({
  position: new Vector3(44.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile113.addComponentOrReplace(transform130)

const woodTile114 = new Entity('woodTile114')
engine.addEntity(woodTile114)
woodTile114.setParent(_scene)
woodTile114.addComponentOrReplace(gltfShape3)
const transform131 = new Transform({
  position: new Vector3(44.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile114.addComponentOrReplace(transform131)

const woodTile115 = new Entity('woodTile115')
engine.addEntity(woodTile115)
woodTile115.setParent(_scene)
woodTile115.addComponentOrReplace(gltfShape3)
const transform132 = new Transform({
  position: new Vector3(42.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile115.addComponentOrReplace(transform132)

const woodTile116 = new Entity('woodTile116')
engine.addEntity(woodTile116)
woodTile116.setParent(_scene)
woodTile116.addComponentOrReplace(gltfShape3)
const transform133 = new Transform({
  position: new Vector3(42.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile116.addComponentOrReplace(transform133)

const woodTile117 = new Entity('woodTile117')
engine.addEntity(woodTile117)
woodTile117.setParent(_scene)
woodTile117.addComponentOrReplace(gltfShape3)
const transform134 = new Transform({
  position: new Vector3(40.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile117.addComponentOrReplace(transform134)

const woodTile118 = new Entity('woodTile118')
engine.addEntity(woodTile118)
woodTile118.setParent(_scene)
woodTile118.addComponentOrReplace(gltfShape3)
const transform135 = new Transform({
  position: new Vector3(40.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile118.addComponentOrReplace(transform135)

const woodTile119 = new Entity('woodTile119')
engine.addEntity(woodTile119)
woodTile119.setParent(_scene)
woodTile119.addComponentOrReplace(gltfShape3)
const transform136 = new Transform({
  position: new Vector3(38.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile119.addComponentOrReplace(transform136)

const woodTile120 = new Entity('woodTile120')
engine.addEntity(woodTile120)
woodTile120.setParent(_scene)
woodTile120.addComponentOrReplace(gltfShape3)
const transform137 = new Transform({
  position: new Vector3(38.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile120.addComponentOrReplace(transform137)

const woodTile121 = new Entity('woodTile121')
engine.addEntity(woodTile121)
woodTile121.setParent(_scene)
woodTile121.addComponentOrReplace(gltfShape3)
const transform138 = new Transform({
  position: new Vector3(36.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile121.addComponentOrReplace(transform138)

const woodTile122 = new Entity('woodTile122')
engine.addEntity(woodTile122)
woodTile122.setParent(_scene)
woodTile122.addComponentOrReplace(gltfShape3)
const transform139 = new Transform({
  position: new Vector3(36.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile122.addComponentOrReplace(transform139)

const woodTile123 = new Entity('woodTile123')
engine.addEntity(woodTile123)
woodTile123.setParent(_scene)
woodTile123.addComponentOrReplace(gltfShape3)
const transform140 = new Transform({
  position: new Vector3(44.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile123.addComponentOrReplace(transform140)

const woodTile124 = new Entity('woodTile124')
engine.addEntity(woodTile124)
woodTile124.setParent(_scene)
woodTile124.addComponentOrReplace(gltfShape3)
const transform141 = new Transform({
  position: new Vector3(44.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile124.addComponentOrReplace(transform141)

const woodTile125 = new Entity('woodTile125')
engine.addEntity(woodTile125)
woodTile125.setParent(_scene)
woodTile125.addComponentOrReplace(gltfShape3)
const transform142 = new Transform({
  position: new Vector3(42.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile125.addComponentOrReplace(transform142)

const woodTile126 = new Entity('woodTile126')
engine.addEntity(woodTile126)
woodTile126.setParent(_scene)
woodTile126.addComponentOrReplace(gltfShape3)
const transform143 = new Transform({
  position: new Vector3(42.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile126.addComponentOrReplace(transform143)

const woodTile127 = new Entity('woodTile127')
engine.addEntity(woodTile127)
woodTile127.setParent(_scene)
woodTile127.addComponentOrReplace(gltfShape3)
const transform144 = new Transform({
  position: new Vector3(40.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile127.addComponentOrReplace(transform144)

const woodTile128 = new Entity('woodTile128')
engine.addEntity(woodTile128)
woodTile128.setParent(_scene)
woodTile128.addComponentOrReplace(gltfShape3)
const transform145 = new Transform({
  position: new Vector3(40.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile128.addComponentOrReplace(transform145)

const woodTile129 = new Entity('woodTile129')
engine.addEntity(woodTile129)
woodTile129.setParent(_scene)
woodTile129.addComponentOrReplace(gltfShape3)
const transform146 = new Transform({
  position: new Vector3(38.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile129.addComponentOrReplace(transform146)

const woodTile130 = new Entity('woodTile130')
engine.addEntity(woodTile130)
woodTile130.setParent(_scene)
woodTile130.addComponentOrReplace(gltfShape3)
const transform147 = new Transform({
  position: new Vector3(38.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile130.addComponentOrReplace(transform147)

const woodTile131 = new Entity('woodTile131')
engine.addEntity(woodTile131)
woodTile131.setParent(_scene)
woodTile131.addComponentOrReplace(gltfShape3)
const transform148 = new Transform({
  position: new Vector3(46.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile131.addComponentOrReplace(transform148)

const woodTile132 = new Entity('woodTile132')
engine.addEntity(woodTile132)
woodTile132.setParent(_scene)
woodTile132.addComponentOrReplace(gltfShape3)
const transform149 = new Transform({
  position: new Vector3(46.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile132.addComponentOrReplace(transform149)

const woodTile109 = new Entity('woodTile109')
engine.addEntity(woodTile109)
woodTile109.setParent(_scene)
woodTile109.addComponentOrReplace(gltfShape3)
const transform150 = new Transform({
  position: new Vector3(42.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile109.addComponentOrReplace(transform150)

const woodTile110 = new Entity('woodTile110')
engine.addEntity(woodTile110)
woodTile110.setParent(_scene)
woodTile110.addComponentOrReplace(gltfShape3)
const transform151 = new Transform({
  position: new Vector3(42.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile110.addComponentOrReplace(transform151)

const woodTile133 = new Entity('woodTile133')
engine.addEntity(woodTile133)
woodTile133.setParent(_scene)
woodTile133.addComponentOrReplace(gltfShape3)
const transform152 = new Transform({
  position: new Vector3(44.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile133.addComponentOrReplace(transform152)

const woodTile134 = new Entity('woodTile134')
engine.addEntity(woodTile134)
woodTile134.setParent(_scene)
woodTile134.addComponentOrReplace(gltfShape3)
const transform153 = new Transform({
  position: new Vector3(44.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile134.addComponentOrReplace(transform153)

const woodTile135 = new Entity('woodTile135')
engine.addEntity(woodTile135)
woodTile135.setParent(_scene)
woodTile135.addComponentOrReplace(gltfShape3)
const transform154 = new Transform({
  position: new Vector3(42.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile135.addComponentOrReplace(transform154)

const woodTile136 = new Entity('woodTile136')
engine.addEntity(woodTile136)
woodTile136.setParent(_scene)
woodTile136.addComponentOrReplace(gltfShape3)
const transform155 = new Transform({
  position: new Vector3(42.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile136.addComponentOrReplace(transform155)

const woodTile137 = new Entity('woodTile137')
engine.addEntity(woodTile137)
woodTile137.setParent(_scene)
woodTile137.addComponentOrReplace(gltfShape3)
const transform156 = new Transform({
  position: new Vector3(44.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile137.addComponentOrReplace(transform156)

const woodTile138 = new Entity('woodTile138')
engine.addEntity(woodTile138)
woodTile138.setParent(_scene)
woodTile138.addComponentOrReplace(gltfShape3)
const transform157 = new Transform({
  position: new Vector3(44.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile138.addComponentOrReplace(transform157)

const woodTile139 = new Entity('woodTile139')
engine.addEntity(woodTile139)
woodTile139.setParent(_scene)
woodTile139.addComponentOrReplace(gltfShape3)
const transform158 = new Transform({
  position: new Vector3(48.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile139.addComponentOrReplace(transform158)

const woodTile140 = new Entity('woodTile140')
engine.addEntity(woodTile140)
woodTile140.setParent(_scene)
woodTile140.addComponentOrReplace(gltfShape3)
const transform159 = new Transform({
  position: new Vector3(48.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile140.addComponentOrReplace(transform159)

const woodTile141 = new Entity('woodTile141')
engine.addEntity(woodTile141)
woodTile141.setParent(_scene)
woodTile141.addComponentOrReplace(gltfShape3)
const transform160 = new Transform({
  position: new Vector3(48.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile141.addComponentOrReplace(transform160)

const woodTile142 = new Entity('woodTile142')
engine.addEntity(woodTile142)
woodTile142.setParent(_scene)
woodTile142.addComponentOrReplace(gltfShape3)
const transform161 = new Transform({
  position: new Vector3(48.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile142.addComponentOrReplace(transform161)

const woodTile143 = new Entity('woodTile143')
engine.addEntity(woodTile143)
woodTile143.setParent(_scene)
woodTile143.addComponentOrReplace(gltfShape3)
const transform162 = new Transform({
  position: new Vector3(50.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile143.addComponentOrReplace(transform162)

const woodTile144 = new Entity('woodTile144')
engine.addEntity(woodTile144)
woodTile144.setParent(_scene)
woodTile144.addComponentOrReplace(gltfShape3)
const transform163 = new Transform({
  position: new Vector3(50.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile144.addComponentOrReplace(transform163)

const woodTile145 = new Entity('woodTile145')
engine.addEntity(woodTile145)
woodTile145.setParent(_scene)
woodTile145.addComponentOrReplace(gltfShape3)
const transform164 = new Transform({
  position: new Vector3(50.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile145.addComponentOrReplace(transform164)

const woodTile146 = new Entity('woodTile146')
engine.addEntity(woodTile146)
woodTile146.setParent(_scene)
woodTile146.addComponentOrReplace(gltfShape3)
const transform165 = new Transform({
  position: new Vector3(50.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile146.addComponentOrReplace(transform165)

const woodTile147 = new Entity('woodTile147')
engine.addEntity(woodTile147)
woodTile147.setParent(_scene)
woodTile147.addComponentOrReplace(gltfShape3)
const transform166 = new Transform({
  position: new Vector3(52.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile147.addComponentOrReplace(transform166)

const woodTile148 = new Entity('woodTile148')
engine.addEntity(woodTile148)
woodTile148.setParent(_scene)
woodTile148.addComponentOrReplace(gltfShape3)
const transform167 = new Transform({
  position: new Vector3(52.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile148.addComponentOrReplace(transform167)

const woodTile149 = new Entity('woodTile149')
engine.addEntity(woodTile149)
woodTile149.setParent(_scene)
woodTile149.addComponentOrReplace(gltfShape3)
const transform168 = new Transform({
  position: new Vector3(52.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile149.addComponentOrReplace(transform168)

const woodTile150 = new Entity('woodTile150')
engine.addEntity(woodTile150)
woodTile150.setParent(_scene)
woodTile150.addComponentOrReplace(gltfShape3)
const transform169 = new Transform({
  position: new Vector3(52.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile150.addComponentOrReplace(transform169)

const woodTile151 = new Entity('woodTile151')
engine.addEntity(woodTile151)
woodTile151.setParent(_scene)
woodTile151.addComponentOrReplace(gltfShape3)
const transform170 = new Transform({
  position: new Vector3(42.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile151.addComponentOrReplace(transform170)

const woodTile152 = new Entity('woodTile152')
engine.addEntity(woodTile152)
woodTile152.setParent(_scene)
woodTile152.addComponentOrReplace(gltfShape3)
const transform171 = new Transform({
  position: new Vector3(52.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile152.addComponentOrReplace(transform171)

const woodTile153 = new Entity('woodTile153')
engine.addEntity(woodTile153)
woodTile153.setParent(_scene)
woodTile153.addComponentOrReplace(gltfShape3)
const transform172 = new Transform({
  position: new Vector3(50.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile153.addComponentOrReplace(transform172)

const woodTile154 = new Entity('woodTile154')
engine.addEntity(woodTile154)
woodTile154.setParent(_scene)
woodTile154.addComponentOrReplace(gltfShape3)
const transform173 = new Transform({
  position: new Vector3(50.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile154.addComponentOrReplace(transform173)

const woodTile155 = new Entity('woodTile155')
engine.addEntity(woodTile155)
woodTile155.setParent(_scene)
woodTile155.addComponentOrReplace(gltfShape3)
const transform174 = new Transform({
  position: new Vector3(52.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile155.addComponentOrReplace(transform174)

const woodTile156 = new Entity('woodTile156')
engine.addEntity(woodTile156)
woodTile156.setParent(_scene)
woodTile156.addComponentOrReplace(gltfShape3)
const transform175 = new Transform({
  position: new Vector3(50.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile156.addComponentOrReplace(transform175)

const woodTile157 = new Entity('woodTile157')
engine.addEntity(woodTile157)
woodTile157.setParent(_scene)
woodTile157.addComponentOrReplace(gltfShape3)
const transform176 = new Transform({
  position: new Vector3(52.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile157.addComponentOrReplace(transform176)

const woodTile158 = new Entity('woodTile158')
engine.addEntity(woodTile158)
woodTile158.setParent(_scene)
woodTile158.addComponentOrReplace(gltfShape3)
const transform177 = new Transform({
  position: new Vector3(52.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile158.addComponentOrReplace(transform177)

const woodTile159 = new Entity('woodTile159')
engine.addEntity(woodTile159)
woodTile159.setParent(_scene)
woodTile159.addComponentOrReplace(gltfShape3)
const transform178 = new Transform({
  position: new Vector3(50.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile159.addComponentOrReplace(transform178)

const woodTile160 = new Entity('woodTile160')
engine.addEntity(woodTile160)
woodTile160.setParent(_scene)
woodTile160.addComponentOrReplace(gltfShape3)
const transform179 = new Transform({
  position: new Vector3(50.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile160.addComponentOrReplace(transform179)

const woodTile161 = new Entity('woodTile161')
engine.addEntity(woodTile161)
woodTile161.setParent(_scene)
woodTile161.addComponentOrReplace(gltfShape3)
const transform180 = new Transform({
  position: new Vector3(52.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile161.addComponentOrReplace(transform180)

const woodTile162 = new Entity('woodTile162')
engine.addEntity(woodTile162)
woodTile162.setParent(_scene)
woodTile162.addComponentOrReplace(gltfShape3)
const transform181 = new Transform({
  position: new Vector3(52.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile162.addComponentOrReplace(transform181)

const woodTile163 = new Entity('woodTile163')
engine.addEntity(woodTile163)
woodTile163.setParent(_scene)
woodTile163.addComponentOrReplace(gltfShape3)
const transform182 = new Transform({
  position: new Vector3(50.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile163.addComponentOrReplace(transform182)

const stairsGlassPanel = new Entity('stairsGlassPanel')
engine.addEntity(stairsGlassPanel)
stairsGlassPanel.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(13.5, 0, 18.923131942749023),
  rotation: new Quaternion(4.28236945890551e-15, 0.9999951124191284, -1.1920869980031057e-7, -0.0031727170571684837),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
stairsGlassPanel.addComponentOrReplace(transform183)
const gltfShape4 = new GLTFShape("85cc1f65-ff9b-40fc-a383-91ad7acd8d31/glassPanelStairs.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
stairsGlassPanel.addComponentOrReplace(gltfShape4)

const pillarSimpleRound = new Entity('pillarSimpleRound')
engine.addEntity(pillarSimpleRound)
pillarSimpleRound.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(7, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound.addComponentOrReplace(transform184)
const gltfShape5 = new GLTFShape("b587438c-9430-475f-98c5-3ce680627921/SimpleRoundPillar.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
pillarSimpleRound.addComponentOrReplace(gltfShape5)

const pillarSimpleRound2 = new Entity('pillarSimpleRound2')
engine.addEntity(pillarSimpleRound2)
pillarSimpleRound2.setParent(_scene)
pillarSimpleRound2.addComponentOrReplace(gltfShape5)
const transform185 = new Transform({
  position: new Vector3(16.875, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound2.addComponentOrReplace(transform185)

const pillarSimpleRound3 = new Entity('pillarSimpleRound3')
engine.addEntity(pillarSimpleRound3)
pillarSimpleRound3.setParent(_scene)
pillarSimpleRound3.addComponentOrReplace(gltfShape5)
const transform186 = new Transform({
  position: new Vector3(7.25, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound3.addComponentOrReplace(transform186)

const pillarSimpleRound5 = new Entity('pillarSimpleRound5')
engine.addEntity(pillarSimpleRound5)
pillarSimpleRound5.setParent(_scene)
pillarSimpleRound5.addComponentOrReplace(gltfShape5)
const transform187 = new Transform({
  position: new Vector3(7, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound5.addComponentOrReplace(transform187)

const roofBeigeCorner = new Entity('roofBeigeCorner')
engine.addEntity(roofBeigeCorner)
roofBeigeCorner.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(9.66146469116211, 0, 26.989246368408203),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeigeCorner.addComponentOrReplace(transform188)
const gltfShape6 = new GLTFShape("22719fc0-de52-439e-bcda-ab630cb7fd21/BeigeRoof_Corner.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roofBeigeCorner.addComponentOrReplace(gltfShape6)

const roofBeigeEdge = new Entity('roofBeigeEdge')
engine.addEntity(roofBeigeEdge)
roofBeigeEdge.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(13.638248443603516, 0, 23.018829345703125),
  rotation: new Quaternion(-2.4039284204604083e-15, 0.7044481039047241, -8.397675088644974e-8, 0.7097554802894592),
  scale: new Vector3(0.9999998211860657, 1, 0.9999998211860657)
})
roofBeigeEdge.addComponentOrReplace(transform189)
const gltfShape7 = new GLTFShape("b1d3b76e-9996-46ab-9618-5b325e3bcfbc/BeigeRoof_1Edge.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
roofBeigeEdge.addComponentOrReplace(gltfShape7)

const roofBeigeCorner2 = new Entity('roofBeigeCorner2')
engine.addEntity(roofBeigeCorner2)
roofBeigeCorner2.setParent(_scene)
roofBeigeCorner2.addComponentOrReplace(gltfShape6)
const transform190 = new Transform({
  position: new Vector3(17.6728458404541, 0, 23.07196807861328),
  rotation: new Quaternion(2.6047798375286634e-15, 0.7018389105796814, -8.36657036984434e-8, 0.7123357653617859),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
roofBeigeCorner2.addComponentOrReplace(transform190)

const roofBeigeEdge2 = new Entity('roofBeigeEdge2')
engine.addEntity(roofBeigeEdge2)
roofBeigeEdge2.setParent(_scene)
roofBeigeEdge2.addComponentOrReplace(gltfShape7)
const transform191 = new Transform({
  position: new Vector3(9.662616729736328, 0, 22.972299575805664),
  rotation: new Quaternion(-2.657910190903426e-15, 0.0038437056355178356, -4.582080825876744e-10, 0.9999926090240479),
  scale: new Vector3(1.0001839399337769, 1, 3.9998481273651123)
})
roofBeigeEdge2.addComponentOrReplace(transform191)

const roofBeigeEdge4 = new Entity('roofBeigeEdge4')
engine.addEntity(roofBeigeEdge4)
roofBeigeEdge4.setParent(_scene)
roofBeigeEdge4.addComponentOrReplace(gltfShape7)
const transform192 = new Transform({
  position: new Vector3(9.601245880126953, 0, 15.068181037902832),
  rotation: new Quaternion(-2.657910190903426e-15, 0.0038437056355178356, -4.582080825876744e-10, 0.9999926090240479),
  scale: new Vector3(1.0000041723251343, 1, 1.0000041723251343)
})
roofBeigeEdge4.addComponentOrReplace(transform192)

const woodTile164 = new Entity('woodTile164')
engine.addEntity(woodTile164)
woodTile164.setParent(_scene)
woodTile164.addComponentOrReplace(gltfShape3)
const transform193 = new Transform({
  position: new Vector3(52.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile164.addComponentOrReplace(transform193)

const woodTile165 = new Entity('woodTile165')
engine.addEntity(woodTile165)
woodTile165.setParent(_scene)
woodTile165.addComponentOrReplace(gltfShape3)
const transform194 = new Transform({
  position: new Vector3(50.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile165.addComponentOrReplace(transform194)

const woodTile166 = new Entity('woodTile166')
engine.addEntity(woodTile166)
woodTile166.setParent(_scene)
woodTile166.addComponentOrReplace(gltfShape3)
const transform195 = new Transform({
  position: new Vector3(50.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile166.addComponentOrReplace(transform195)

const woodTile167 = new Entity('woodTile167')
engine.addEntity(woodTile167)
woodTile167.setParent(_scene)
woodTile167.addComponentOrReplace(gltfShape3)
const transform196 = new Transform({
  position: new Vector3(52.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile167.addComponentOrReplace(transform196)

const woodTile168 = new Entity('woodTile168')
engine.addEntity(woodTile168)
woodTile168.setParent(_scene)
woodTile168.addComponentOrReplace(gltfShape3)
const transform197 = new Transform({
  position: new Vector3(50.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile168.addComponentOrReplace(transform197)

const woodTile169 = new Entity('woodTile169')
engine.addEntity(woodTile169)
woodTile169.setParent(_scene)
woodTile169.addComponentOrReplace(gltfShape3)
const transform198 = new Transform({
  position: new Vector3(52.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile169.addComponentOrReplace(transform198)

const woodTile170 = new Entity('woodTile170')
engine.addEntity(woodTile170)
woodTile170.setParent(_scene)
woodTile170.addComponentOrReplace(gltfShape3)
const transform199 = new Transform({
  position: new Vector3(50.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile170.addComponentOrReplace(transform199)

const woodTile171 = new Entity('woodTile171')
engine.addEntity(woodTile171)
woodTile171.setParent(_scene)
woodTile171.addComponentOrReplace(gltfShape3)
const transform200 = new Transform({
  position: new Vector3(52.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile171.addComponentOrReplace(transform200)

const roofBeigeCorner3 = new Entity('roofBeigeCorner3')
engine.addEntity(roofBeigeCorner3)
roofBeigeCorner3.setParent(_scene)
roofBeigeCorner3.addComponentOrReplace(gltfShape6)
const transform201 = new Transform({
  position: new Vector3(5.533376693725586, 0, 7.210653781890869),
  rotation: new Quaternion(-4.2883190183270244e-15, -0.7076634168624878, 8.436004605982816e-8, 0.7065497040748596),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
roofBeigeCorner3.addComponentOrReplace(transform201)

const roofBeigeEdge6 = new Entity('roofBeigeEdge6')
engine.addEntity(roofBeigeEdge6)
roofBeigeEdge6.setParent(_scene)
roofBeigeEdge6.addComponentOrReplace(gltfShape7)
const transform202 = new Transform({
  position: new Vector3(9.302858352661133, 0, 7.213225841522217),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
roofBeigeEdge6.addComponentOrReplace(transform202)

const woodTile172 = new Entity('woodTile172')
engine.addEntity(woodTile172)
woodTile172.setParent(_scene)
woodTile172.addComponentOrReplace(gltfShape3)
const transform203 = new Transform({
  position: new Vector3(14.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile172.addComponentOrReplace(transform203)

const woodTile173 = new Entity('woodTile173')
engine.addEntity(woodTile173)
woodTile173.setParent(_scene)
woodTile173.addComponentOrReplace(gltfShape3)
const transform204 = new Transform({
  position: new Vector3(14.5, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile173.addComponentOrReplace(transform204)

const woodTile174 = new Entity('woodTile174')
engine.addEntity(woodTile174)
woodTile174.setParent(_scene)
woodTile174.addComponentOrReplace(gltfShape3)
const transform205 = new Transform({
  position: new Vector3(49.152366638183594, 0, 7.068056106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile174.addComponentOrReplace(transform205)

const woodTile175 = new Entity('woodTile175')
engine.addEntity(woodTile175)
woodTile175.setParent(_scene)
woodTile175.addComponentOrReplace(gltfShape3)
const transform206 = new Transform({
  position: new Vector3(47.152366638183594, 0, 7.068056106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile175.addComponentOrReplace(transform206)

const woodTile176 = new Entity('woodTile176')
engine.addEntity(woodTile176)
woodTile176.setParent(_scene)
woodTile176.addComponentOrReplace(gltfShape3)
const transform207 = new Transform({
  position: new Vector3(47.152366638183594, 0, 5.068056106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile176.addComponentOrReplace(transform207)

const woodTile177 = new Entity('woodTile177')
engine.addEntity(woodTile177)
woodTile177.setParent(_scene)
woodTile177.addComponentOrReplace(gltfShape3)
const transform208 = new Transform({
  position: new Vector3(49.152366638183594, 0, 5.068056106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile177.addComponentOrReplace(transform208)

const verticalBluePad = new Entity('verticalBluePad')
engine.addEntity(verticalBluePad)
verticalBluePad.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(70, 0, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4916296005249023, 2.4916296005249023, 2.4916296005249023)
})
verticalBluePad.addComponentOrReplace(transform209)

const sandTile = new Entity('sandTile')
engine.addEntity(sandTile)
sandTile.setParent(_scene)
const transform210 = new Transform({
  position: new Vector3(16.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile.addComponentOrReplace(transform210)
const gltfShape8 = new GLTFShape("1874152b-dd3d-4890-960a-4e7719346326/FloorBlock_02/FloorBlock_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
sandTile.addComponentOrReplace(gltfShape8)

const sandTile2 = new Entity('sandTile2')
engine.addEntity(sandTile2)
sandTile2.setParent(_scene)
sandTile2.addComponentOrReplace(gltfShape8)
const transform211 = new Transform({
  position: new Vector3(16.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile2.addComponentOrReplace(transform211)

const sandTile3 = new Entity('sandTile3')
engine.addEntity(sandTile3)
sandTile3.setParent(_scene)
sandTile3.addComponentOrReplace(gltfShape8)
const transform212 = new Transform({
  position: new Vector3(14.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile3.addComponentOrReplace(transform212)

const sandTile4 = new Entity('sandTile4')
engine.addEntity(sandTile4)
sandTile4.setParent(_scene)
sandTile4.addComponentOrReplace(gltfShape8)
const transform213 = new Transform({
  position: new Vector3(14.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile4.addComponentOrReplace(transform213)

const sandTile5 = new Entity('sandTile5')
engine.addEntity(sandTile5)
sandTile5.setParent(_scene)
sandTile5.addComponentOrReplace(gltfShape8)
const transform214 = new Transform({
  position: new Vector3(12.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile5.addComponentOrReplace(transform214)

const sandTile6 = new Entity('sandTile6')
engine.addEntity(sandTile6)
sandTile6.setParent(_scene)
sandTile6.addComponentOrReplace(gltfShape8)
const transform215 = new Transform({
  position: new Vector3(12.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile6.addComponentOrReplace(transform215)

const sandTile7 = new Entity('sandTile7')
engine.addEntity(sandTile7)
sandTile7.setParent(_scene)
sandTile7.addComponentOrReplace(gltfShape8)
const transform216 = new Transform({
  position: new Vector3(10.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile7.addComponentOrReplace(transform216)

const sandTile8 = new Entity('sandTile8')
engine.addEntity(sandTile8)
sandTile8.setParent(_scene)
sandTile8.addComponentOrReplace(gltfShape8)
const transform217 = new Transform({
  position: new Vector3(10.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile8.addComponentOrReplace(transform217)

const sandTile9 = new Entity('sandTile9')
engine.addEntity(sandTile9)
sandTile9.setParent(_scene)
sandTile9.addComponentOrReplace(gltfShape8)
const transform218 = new Transform({
  position: new Vector3(8.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile9.addComponentOrReplace(transform218)

const sandTile10 = new Entity('sandTile10')
engine.addEntity(sandTile10)
sandTile10.setParent(_scene)
sandTile10.addComponentOrReplace(gltfShape8)
const transform219 = new Transform({
  position: new Vector3(8.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile10.addComponentOrReplace(transform219)

const sandTile11 = new Entity('sandTile11')
engine.addEntity(sandTile11)
sandTile11.setParent(_scene)
sandTile11.addComponentOrReplace(gltfShape8)
const transform220 = new Transform({
  position: new Vector3(6.68123722076416, 4.16016960144043, 25.958681106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile11.addComponentOrReplace(transform220)

const sandTile12 = new Entity('sandTile12')
engine.addEntity(sandTile12)
sandTile12.setParent(_scene)
sandTile12.addComponentOrReplace(gltfShape8)
const transform221 = new Transform({
  position: new Vector3(6.68123722076416, 4.16016960144043, 23.958681106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile12.addComponentOrReplace(transform221)

const sandTile13 = new Entity('sandTile13')
engine.addEntity(sandTile13)
sandTile13.setParent(_scene)
sandTile13.addComponentOrReplace(gltfShape8)
const transform222 = new Transform({
  position: new Vector3(8.640557289123535, 4.16016960144043, 20.073104858398438),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile13.addComponentOrReplace(transform222)

const sandTile14 = new Entity('sandTile14')
engine.addEntity(sandTile14)
sandTile14.setParent(_scene)
sandTile14.addComponentOrReplace(gltfShape8)
const transform223 = new Transform({
  position: new Vector3(8.617644309997559, 4.16016960144043, 22.020341873168945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile14.addComponentOrReplace(transform223)

const sandTile15 = new Entity('sandTile15')
engine.addEntity(sandTile15)
sandTile15.setParent(_scene)
sandTile15.addComponentOrReplace(gltfShape8)
const transform224 = new Transform({
  position: new Vector3(6.714416980743408, 4.16016960144043, 20.06096649169922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile15.addComponentOrReplace(transform224)

const sandTile16 = new Entity('sandTile16')
engine.addEntity(sandTile16)
sandTile16.setParent(_scene)
sandTile16.addComponentOrReplace(gltfShape8)
const transform225 = new Transform({
  position: new Vector3(6.691504001617432, 4.16016960144043, 22.008203506469727),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile16.addComponentOrReplace(transform225)

const sandTile17 = new Entity('sandTile17')
engine.addEntity(sandTile17)
sandTile17.setParent(_scene)
sandTile17.addComponentOrReplace(gltfShape8)
const transform226 = new Transform({
  position: new Vector3(8.601009368896484, 4.16016960144043, 12.186963081359863),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile17.addComponentOrReplace(transform226)

const sandTile18 = new Entity('sandTile18')
engine.addEntity(sandTile18)
sandTile18.setParent(_scene)
sandTile18.addComponentOrReplace(gltfShape8)
const transform227 = new Transform({
  position: new Vector3(8.601009368896484, 4.16016960144043, 14.186963081359863),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile18.addComponentOrReplace(transform227)

const sandTile19 = new Entity('sandTile19')
engine.addEntity(sandTile19)
sandTile19.setParent(_scene)
sandTile19.addComponentOrReplace(gltfShape8)
const transform228 = new Transform({
  position: new Vector3(6.674868583679199, 4.16016960144043, 12.174824714660645),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile19.addComponentOrReplace(transform228)

const sandTile20 = new Entity('sandTile20')
engine.addEntity(sandTile20)
sandTile20.setParent(_scene)
sandTile20.addComponentOrReplace(gltfShape8)
const transform229 = new Transform({
  position: new Vector3(6.674868583679199, 4.16016960144043, 14.174824714660645),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile20.addComponentOrReplace(transform229)

const sandTile21 = new Entity('sandTile21')
engine.addEntity(sandTile21)
sandTile21.setParent(_scene)
sandTile21.addComponentOrReplace(gltfShape8)
const transform230 = new Transform({
  position: new Vector3(8.616878509521484, 4.16016960144043, 16.15873146057129),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile21.addComponentOrReplace(transform230)

const sandTile22 = new Entity('sandTile22')
engine.addEntity(sandTile22)
sandTile22.setParent(_scene)
sandTile22.addComponentOrReplace(gltfShape8)
const transform231 = new Transform({
  position: new Vector3(8.641010284423828, 4.16016960144043, 18.15314292907715),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile22.addComponentOrReplace(transform231)

const sandTile23 = new Entity('sandTile23')
engine.addEntity(sandTile23)
sandTile23.setParent(_scene)
sandTile23.addComponentOrReplace(gltfShape8)
const transform232 = new Transform({
  position: new Vector3(6.714869499206543, 4.16016960144043, 18.14100456237793),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile23.addComponentOrReplace(transform232)

const sandTile24 = new Entity('sandTile24')
engine.addEntity(sandTile24)
sandTile24.setParent(_scene)
sandTile24.addComponentOrReplace(gltfShape8)
const transform233 = new Transform({
  position: new Vector3(6.690737724304199, 4.16016960144043, 16.14659309387207),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile24.addComponentOrReplace(transform233)

const sandTile25 = new Entity('sandTile25')
engine.addEntity(sandTile25)
sandTile25.setParent(_scene)
sandTile25.addComponentOrReplace(gltfShape8)
const transform234 = new Transform({
  position: new Vector3(8.627453804016113, 4.16016960144043, 8.21133804321289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile25.addComponentOrReplace(transform234)

const sandTile26 = new Entity('sandTile26')
engine.addEntity(sandTile26)
sandTile26.setParent(_scene)
sandTile26.addComponentOrReplace(gltfShape8)
const transform235 = new Transform({
  position: new Vector3(8.627453804016113, 4.16016960144043, 10.21133804321289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile26.addComponentOrReplace(transform235)

const sandTile27 = new Entity('sandTile27')
engine.addEntity(sandTile27)
sandTile27.setParent(_scene)
sandTile27.addComponentOrReplace(gltfShape8)
const transform236 = new Transform({
  position: new Vector3(6.701313018798828, 4.16016960144043, 10.199199676513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile27.addComponentOrReplace(transform236)

const sandTile28 = new Entity('sandTile28')
engine.addEntity(sandTile28)
sandTile28.setParent(_scene)
sandTile28.addComponentOrReplace(gltfShape8)
const transform237 = new Transform({
  position: new Vector3(6.701313018798828, 4.16016960144043, 8.199199676513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile28.addComponentOrReplace(transform237)

const sandTile29 = new Entity('sandTile29')
engine.addEntity(sandTile29)
sandTile29.setParent(_scene)
sandTile29.addComponentOrReplace(gltfShape8)
const transform238 = new Transform({
  position: new Vector3(8.595660209655762, 4.16016960144043, 4.2568359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile29.addComponentOrReplace(transform238)

const sandTile30 = new Entity('sandTile30')
engine.addEntity(sandTile30)
sandTile30.setParent(_scene)
sandTile30.addComponentOrReplace(gltfShape8)
const transform239 = new Transform({
  position: new Vector3(8.595660209655762, 4.16016960144043, 6.2568359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile30.addComponentOrReplace(transform239)

const sandTile31 = new Entity('sandTile31')
engine.addEntity(sandTile31)
sandTile31.setParent(_scene)
sandTile31.addComponentOrReplace(gltfShape8)
const transform240 = new Transform({
  position: new Vector3(6.669519424438477, 4.16016960144043, 6.244697570800781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile31.addComponentOrReplace(transform240)

const sandTile32 = new Entity('sandTile32')
engine.addEntity(sandTile32)
sandTile32.setParent(_scene)
sandTile32.addComponentOrReplace(gltfShape8)
const transform241 = new Transform({
  position: new Vector3(6.669519424438477, 4.16016960144043, 4.244697570800781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile32.addComponentOrReplace(transform241)

const sandTile33 = new Entity('sandTile33')
engine.addEntity(sandTile33)
sandTile33.setParent(_scene)
sandTile33.addComponentOrReplace(gltfShape8)
const transform242 = new Transform({
  position: new Vector3(12.488201141357422, 4.16016960144043, 6.286691665649414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile33.addComponentOrReplace(transform242)

const sandTile34 = new Entity('sandTile34')
engine.addEntity(sandTile34)
sandTile34.setParent(_scene)
sandTile34.addComponentOrReplace(gltfShape8)
const transform243 = new Transform({
  position: new Vector3(12.488201141357422, 4.16016960144043, 4.286691665649414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile34.addComponentOrReplace(transform243)

const sandTile35 = new Entity('sandTile35')
engine.addEntity(sandTile35)
sandTile35.setParent(_scene)
sandTile35.addComponentOrReplace(gltfShape8)
const transform244 = new Transform({
  position: new Vector3(10.562061309814453, 4.16016960144043, 6.274553298950195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile35.addComponentOrReplace(transform244)

const sandTile36 = new Entity('sandTile36')
engine.addEntity(sandTile36)
sandTile36.setParent(_scene)
sandTile36.addComponentOrReplace(gltfShape8)
const transform245 = new Transform({
  position: new Vector3(10.562061309814453, 4.16016960144043, 4.274553298950195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile36.addComponentOrReplace(transform245)

const signpostDirections = new Entity('signpostDirections')
engine.addEntity(signpostDirections)
signpostDirections.setParent(_scene)
const transform246 = new Transform({
  position: new Vector3(41.057830810546875, 0, 5.82883882522583),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
signpostDirections.addComponentOrReplace(transform246)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform247 = new Transform({
  position: new Vector3(11.248296737670898, 5.5, 27.087106704711914),
  rotation: new Quaternion(2.250733745158464e-14, -0.999999463558197, 1.1920921139108032e-7, 0.0010313764214515686),
  scale: new Vector3(1.9999998807907104, 1, 0.9999999403953552)
})
imageFromURL.addComponentOrReplace(transform247)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform248 = new Transform({
  position: new Vector3(7.500003337860107, 5.5, 27.003093719482422),
  rotation: new Quaternion(2.250733745158464e-14, -0.999999463558197, 1.1920921139108032e-7, 0.0010313764214515686),
  scale: new Vector3(1.9999998807907104, 1, 0.9999999403953552)
})
imageFromURL2.addComponentOrReplace(transform248)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform249 = new Transform({
  position: new Vector3(15.059341430664062, 5.5, 27),
  rotation: new Quaternion(2.250733745158464e-14, -0.999999463558197, 1.1920921139108032e-7, 0.0010313764214515686),
  scale: new Vector3(1.9999995231628418, 1, 0.9999997615814209)
})
imageFromURL3.addComponentOrReplace(transform249)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform250 = new Transform({
  position: new Vector3(5.95681619644165, 5.5, 19.62544059753418),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.0000014305114746, 1, 1.0000007152557373)
})
imageFromURL4.addComponentOrReplace(transform250)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform251 = new Transform({
  position: new Vector3(5.824572563171387, 5.499999523162842, 15.250534057617188),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.000005006790161, 1, 1.0000025033950806)
})
imageFromURL5.addComponentOrReplace(transform251)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform252 = new Transform({
  position: new Vector3(6.04318380355835, 5.500000476837158, 23.624513626098633),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.0000016689300537, 1, 1.0000008344650269)
})
imageFromURL6.addComponentOrReplace(transform252)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform253 = new Transform({
  position: new Vector3(5.957768440246582, 5.5, 6.375486373901367),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.000002861022949, 1, 1.0000014305114746)
})
imageFromURL8.addComponentOrReplace(transform253)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform254 = new Transform({
  position: new Vector3(5.957768440246582, 5.500000476837158, 10.875486373901367),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.0000030994415283, 1, 1.0000015497207642)
})
imageFromURL9.addComponentOrReplace(transform254)

const roundGalleryLight = new Entity('roundGalleryLight')
engine.addEntity(roundGalleryLight)
roundGalleryLight.setParent(_scene)
const transform255 = new Transform({
  position: new Vector3(14.940657615661621, 7, 27),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundGalleryLight.addComponentOrReplace(transform255)

const roundGalleryLight2 = new Entity('roundGalleryLight2')
engine.addEntity(roundGalleryLight2)
roundGalleryLight2.setParent(_scene)
const transform256 = new Transform({
  position: new Vector3(11.019814491271973, 7, 27.090200424194336),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundGalleryLight2.addComponentOrReplace(transform256)

const roundGalleryLight3 = new Entity('roundGalleryLight3')
engine.addEntity(roundGalleryLight3)
roundGalleryLight3.setParent(_scene)
const transform257 = new Transform({
  position: new Vector3(7.271514892578125, 7, 27),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundGalleryLight3.addComponentOrReplace(transform257)

const roofBeigeEdge7 = new Entity('roofBeigeEdge7')
engine.addEntity(roofBeigeEdge7)
roofBeigeEdge7.setParent(_scene)
roofBeigeEdge7.addComponentOrReplace(gltfShape7)
const transform258 = new Transform({
  position: new Vector3(13.219563484191895, 0, 7.221412658691406),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.0000211000442505, 1, 1.999985694885254)
})
roofBeigeEdge7.addComponentOrReplace(transform258)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape9 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape9)
const transform259 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform259)

const glossyAethereaTiles2 = new Entity('glossyAethereaTiles2')
engine.addEntity(glossyAethereaTiles2)
glossyAethereaTiles2.setParent(_scene)
glossyAethereaTiles2.addComponentOrReplace(gltfShape9)
const transform260 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles2.addComponentOrReplace(transform260)

const glossyAethereaTiles3 = new Entity('glossyAethereaTiles3')
engine.addEntity(glossyAethereaTiles3)
glossyAethereaTiles3.setParent(_scene)
glossyAethereaTiles3.addComponentOrReplace(gltfShape9)
const transform261 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles3.addComponentOrReplace(transform261)

const glossyAethereaTiles4 = new Entity('glossyAethereaTiles4')
engine.addEntity(glossyAethereaTiles4)
glossyAethereaTiles4.setParent(_scene)
glossyAethereaTiles4.addComponentOrReplace(gltfShape9)
const transform262 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles4.addComponentOrReplace(transform262)

const glossyAethereaTiles5 = new Entity('glossyAethereaTiles5')
engine.addEntity(glossyAethereaTiles5)
glossyAethereaTiles5.setParent(_scene)
glossyAethereaTiles5.addComponentOrReplace(gltfShape9)
const transform263 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles5.addComponentOrReplace(transform263)

const glossyAethereaTiles6 = new Entity('glossyAethereaTiles6')
engine.addEntity(glossyAethereaTiles6)
glossyAethereaTiles6.setParent(_scene)
glossyAethereaTiles6.addComponentOrReplace(gltfShape9)
const transform264 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles6.addComponentOrReplace(transform264)

const glossyAethereaTiles7 = new Entity('glossyAethereaTiles7')
engine.addEntity(glossyAethereaTiles7)
glossyAethereaTiles7.setParent(_scene)
glossyAethereaTiles7.addComponentOrReplace(gltfShape9)
const transform265 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles7.addComponentOrReplace(transform265)

const glossyAethereaTiles8 = new Entity('glossyAethereaTiles8')
engine.addEntity(glossyAethereaTiles8)
glossyAethereaTiles8.setParent(_scene)
glossyAethereaTiles8.addComponentOrReplace(gltfShape9)
const transform266 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles8.addComponentOrReplace(transform266)

const glossyAethereaTiles9 = new Entity('glossyAethereaTiles9')
engine.addEntity(glossyAethereaTiles9)
glossyAethereaTiles9.setParent(_scene)
glossyAethereaTiles9.addComponentOrReplace(gltfShape9)
const transform267 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles9.addComponentOrReplace(transform267)

const glossyAethereaTiles10 = new Entity('glossyAethereaTiles10')
engine.addEntity(glossyAethereaTiles10)
glossyAethereaTiles10.setParent(_scene)
glossyAethereaTiles10.addComponentOrReplace(gltfShape9)
const transform268 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles10.addComponentOrReplace(transform268)

const glossyAethereaTiles11 = new Entity('glossyAethereaTiles11')
engine.addEntity(glossyAethereaTiles11)
glossyAethereaTiles11.setParent(_scene)
glossyAethereaTiles11.addComponentOrReplace(gltfShape9)
const transform269 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles11.addComponentOrReplace(transform269)

const glossyAethereaTiles12 = new Entity('glossyAethereaTiles12')
engine.addEntity(glossyAethereaTiles12)
glossyAethereaTiles12.setParent(_scene)
glossyAethereaTiles12.addComponentOrReplace(gltfShape9)
const transform270 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles12.addComponentOrReplace(transform270)

const glossyAethereaTiles13 = new Entity('glossyAethereaTiles13')
engine.addEntity(glossyAethereaTiles13)
glossyAethereaTiles13.setParent(_scene)
glossyAethereaTiles13.addComponentOrReplace(gltfShape9)
const transform271 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles13.addComponentOrReplace(transform271)

const glossyAethereaTiles14 = new Entity('glossyAethereaTiles14')
engine.addEntity(glossyAethereaTiles14)
glossyAethereaTiles14.setParent(_scene)
glossyAethereaTiles14.addComponentOrReplace(gltfShape9)
const transform272 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles14.addComponentOrReplace(transform272)

const glossyAethereaTiles15 = new Entity('glossyAethereaTiles15')
engine.addEntity(glossyAethereaTiles15)
glossyAethereaTiles15.setParent(_scene)
glossyAethereaTiles15.addComponentOrReplace(gltfShape9)
const transform273 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles15.addComponentOrReplace(transform273)

const glossyAethereaTiles16 = new Entity('glossyAethereaTiles16')
engine.addEntity(glossyAethereaTiles16)
glossyAethereaTiles16.setParent(_scene)
glossyAethereaTiles16.addComponentOrReplace(gltfShape9)
const transform274 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles16.addComponentOrReplace(transform274)

const glossyAethereaTiles17 = new Entity('glossyAethereaTiles17')
engine.addEntity(glossyAethereaTiles17)
glossyAethereaTiles17.setParent(_scene)
glossyAethereaTiles17.addComponentOrReplace(gltfShape9)
const transform275 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles17.addComponentOrReplace(transform275)

const glossyAethereaTiles18 = new Entity('glossyAethereaTiles18')
engine.addEntity(glossyAethereaTiles18)
glossyAethereaTiles18.setParent(_scene)
glossyAethereaTiles18.addComponentOrReplace(gltfShape9)
const transform276 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles18.addComponentOrReplace(transform276)

const glossyAethereaTiles19 = new Entity('glossyAethereaTiles19')
engine.addEntity(glossyAethereaTiles19)
glossyAethereaTiles19.setParent(_scene)
glossyAethereaTiles19.addComponentOrReplace(gltfShape9)
const transform277 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles19.addComponentOrReplace(transform277)

const glossyAethereaTiles20 = new Entity('glossyAethereaTiles20')
engine.addEntity(glossyAethereaTiles20)
glossyAethereaTiles20.setParent(_scene)
glossyAethereaTiles20.addComponentOrReplace(gltfShape9)
const transform278 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles20.addComponentOrReplace(transform278)

const glossyAethereaTiles21 = new Entity('glossyAethereaTiles21')
engine.addEntity(glossyAethereaTiles21)
glossyAethereaTiles21.setParent(_scene)
glossyAethereaTiles21.addComponentOrReplace(gltfShape9)
const transform279 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles21.addComponentOrReplace(transform279)

const glossyAethereaTiles22 = new Entity('glossyAethereaTiles22')
engine.addEntity(glossyAethereaTiles22)
glossyAethereaTiles22.setParent(_scene)
glossyAethereaTiles22.addComponentOrReplace(gltfShape9)
const transform280 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles22.addComponentOrReplace(transform280)

const glossyAethereaTiles23 = new Entity('glossyAethereaTiles23')
engine.addEntity(glossyAethereaTiles23)
glossyAethereaTiles23.setParent(_scene)
glossyAethereaTiles23.addComponentOrReplace(gltfShape9)
const transform281 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles23.addComponentOrReplace(transform281)

const glossyAethereaTiles24 = new Entity('glossyAethereaTiles24')
engine.addEntity(glossyAethereaTiles24)
glossyAethereaTiles24.setParent(_scene)
glossyAethereaTiles24.addComponentOrReplace(gltfShape9)
const transform282 = new Transform({
  position: new Vector3(88, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles24.addComponentOrReplace(transform282)

const glossyAethereaTiles25 = new Entity('glossyAethereaTiles25')
engine.addEntity(glossyAethereaTiles25)
glossyAethereaTiles25.setParent(_scene)
glossyAethereaTiles25.addComponentOrReplace(gltfShape9)
const transform283 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles25.addComponentOrReplace(transform283)

const glossyAethereaTiles26 = new Entity('glossyAethereaTiles26')
engine.addEntity(glossyAethereaTiles26)
glossyAethereaTiles26.setParent(_scene)
glossyAethereaTiles26.addComponentOrReplace(gltfShape9)
const transform284 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles26.addComponentOrReplace(transform284)

const glossyAethereaTiles27 = new Entity('glossyAethereaTiles27')
engine.addEntity(glossyAethereaTiles27)
glossyAethereaTiles27.setParent(_scene)
glossyAethereaTiles27.addComponentOrReplace(gltfShape9)
const transform285 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles27.addComponentOrReplace(transform285)

const glossyAethereaTiles28 = new Entity('glossyAethereaTiles28')
engine.addEntity(glossyAethereaTiles28)
glossyAethereaTiles28.setParent(_scene)
glossyAethereaTiles28.addComponentOrReplace(gltfShape9)
const transform286 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles28.addComponentOrReplace(transform286)

const glossyAethereaTiles29 = new Entity('glossyAethereaTiles29')
engine.addEntity(glossyAethereaTiles29)
glossyAethereaTiles29.setParent(_scene)
glossyAethereaTiles29.addComponentOrReplace(gltfShape9)
const transform287 = new Transform({
  position: new Vector3(72, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles29.addComponentOrReplace(transform287)

const glossyAethereaTiles30 = new Entity('glossyAethereaTiles30')
engine.addEntity(glossyAethereaTiles30)
glossyAethereaTiles30.setParent(_scene)
glossyAethereaTiles30.addComponentOrReplace(gltfShape9)
const transform288 = new Transform({
  position: new Vector3(88, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles30.addComponentOrReplace(transform288)

const roundGalleryLight4 = new Entity('roundGalleryLight4')
engine.addEntity(roundGalleryLight4)
roundGalleryLight4.setParent(_scene)
const transform289 = new Transform({
  position: new Vector3(6, 7, 23.5),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
roundGalleryLight4.addComponentOrReplace(transform289)

const roundGalleryLight5 = new Entity('roundGalleryLight5')
engine.addEntity(roundGalleryLight5)
roundGalleryLight5.setParent(_scene)
const transform290 = new Transform({
  position: new Vector3(6.044447898864746, 7, 19.372745513916016),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
roundGalleryLight5.addComponentOrReplace(transform290)

const roundGalleryLight6 = new Entity('roundGalleryLight6')
engine.addEntity(roundGalleryLight6)
roundGalleryLight6.setParent(_scene)
const transform291 = new Transform({
  position: new Vector3(5.849236011505127, 7, 15.380334854125977),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
roundGalleryLight6.addComponentOrReplace(transform291)

const roundGalleryLight7 = new Entity('roundGalleryLight7')
engine.addEntity(roundGalleryLight7)
roundGalleryLight7.setParent(_scene)
const transform292 = new Transform({
  position: new Vector3(5.834300518035889, 7, 10.76944351196289),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
roundGalleryLight7.addComponentOrReplace(transform292)

const roundGalleryLight8 = new Entity('roundGalleryLight8')
engine.addEntity(roundGalleryLight8)
roundGalleryLight8.setParent(_scene)
const transform293 = new Transform({
  position: new Vector3(5.834300518035889, 7, 6.234284400939941),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
roundGalleryLight8.addComponentOrReplace(transform293)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform294 = new Transform({
  position: new Vector3(16, 5.5, 3.5),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(2.000000476837158, 1, 1.000000238418579)
})
imageFromURL7.addComponentOrReplace(transform294)

const roundGalleryLight9 = new Entity('roundGalleryLight9')
engine.addEntity(roundGalleryLight9)
roundGalleryLight9.setParent(_scene)
const transform295 = new Transform({
  position: new Vector3(16.133644104003906, 7, 3.6714582443237305),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight9.addComponentOrReplace(transform295)

const roundGalleryLight10 = new Entity('roundGalleryLight10')
engine.addEntity(roundGalleryLight10)
roundGalleryLight10.setParent(_scene)
const transform296 = new Transform({
  position: new Vector3(12.195626258850098, 7, 3.863145351409912),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight10.addComponentOrReplace(transform296)

const roundGalleryLight11 = new Entity('roundGalleryLight11')
engine.addEntity(roundGalleryLight11)
roundGalleryLight11.setParent(_scene)
const transform297 = new Transform({
  position: new Vector3(8.301756858825684, 7, 4.099617958068848),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight11.addComponentOrReplace(transform297)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform298 = new Transform({
  position: new Vector3(8, 5.5, 3.5),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(2.000000476837158, 1, 1.000000238418579)
})
imageFromURL10.addComponentOrReplace(transform298)

const sandTile37 = new Entity('sandTile37')
engine.addEntity(sandTile37)
sandTile37.setParent(_scene)
sandTile37.addComponentOrReplace(gltfShape8)
const transform299 = new Transform({
  position: new Vector3(16.406124114990234, 4.16016960144043, 4.304648399353027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile37.addComponentOrReplace(transform299)

const sandTile38 = new Entity('sandTile38')
engine.addEntity(sandTile38)
sandTile38.setParent(_scene)
sandTile38.addComponentOrReplace(gltfShape8)
const transform300 = new Transform({
  position: new Vector3(14.47998332977295, 4.16016960144043, 4.292510032653809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile38.addComponentOrReplace(transform300)

const sandTile39 = new Entity('sandTile39')
engine.addEntity(sandTile39)
sandTile39.setParent(_scene)
sandTile39.addComponentOrReplace(gltfShape8)
const transform301 = new Transform({
  position: new Vector3(14.47998332977295, 4.16016960144043, 6.292510032653809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile39.addComponentOrReplace(transform301)

const sandTile40 = new Entity('sandTile40')
engine.addEntity(sandTile40)
sandTile40.setParent(_scene)
sandTile40.addComponentOrReplace(gltfShape8)
const transform302 = new Transform({
  position: new Vector3(16.406124114990234, 4.16016960144043, 6.304648399353027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile40.addComponentOrReplace(transform302)

const sandTile41 = new Entity('sandTile41')
engine.addEntity(sandTile41)
sandTile41.setParent(_scene)
sandTile41.addComponentOrReplace(gltfShape8)
const transform303 = new Transform({
  position: new Vector3(18.346534729003906, 4.16016960144043, 4.323511123657227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile41.addComponentOrReplace(transform303)

const sandTile42 = new Entity('sandTile42')
engine.addEntity(sandTile42)
sandTile42.setParent(_scene)
sandTile42.addComponentOrReplace(gltfShape8)
const transform304 = new Transform({
  position: new Vector3(18.346534729003906, 4.16016960144043, 6.323511123657227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile42.addComponentOrReplace(transform304)

const sandTile43 = new Entity('sandTile43')
engine.addEntity(sandTile43)
sandTile43.setParent(_scene)
sandTile43.addComponentOrReplace(gltfShape8)
const transform305 = new Transform({
  position: new Vector3(20.272674560546875, 4.16016960144043, 6.335649490356445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile43.addComponentOrReplace(transform305)

const sandTile44 = new Entity('sandTile44')
engine.addEntity(sandTile44)
sandTile44.setParent(_scene)
sandTile44.addComponentOrReplace(gltfShape8)
const transform306 = new Transform({
  position: new Vector3(20.272674560546875, 4.16016960144043, 4.335649490356445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile44.addComponentOrReplace(transform306)

const roofBeigeEdge3 = new Entity('roofBeigeEdge3')
engine.addEntity(roofBeigeEdge3)
roofBeigeEdge3.setParent(_scene)
roofBeigeEdge3.addComponentOrReplace(gltfShape7)
const transform307 = new Transform({
  position: new Vector3(21.21942138671875, 0, 7.258882522583008),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.00001060962677, 1, 0.9484569430351257)
})
roofBeigeEdge3.addComponentOrReplace(transform307)

const stairsGlassPanel2 = new Entity('stairsGlassPanel2')
engine.addEntity(stairsGlassPanel2)
stairsGlassPanel2.setParent(_scene)
stairsGlassPanel2.addComponentOrReplace(gltfShape4)
const transform308 = new Transform({
  position: new Vector3(25, 4, 5.5),
  rotation: new Quaternion(-6.266029565333252e-15, 0.7232681512832642, -8.62202824691849e-8, -0.6905673742294312),
  scale: new Vector3(1.0000100135803223, 1, 1.0000100135803223)
})
stairsGlassPanel2.addComponentOrReplace(transform308)

const sandTile45 = new Entity('sandTile45')
engine.addEntity(sandTile45)
sandTile45.setParent(_scene)
sandTile45.addComponentOrReplace(gltfShape8)
const transform309 = new Transform({
  position: new Vector3(24.127609252929688, 4.16016960144043, 6.345663070678711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile45.addComponentOrReplace(transform309)

const sandTile46 = new Entity('sandTile46')
engine.addEntity(sandTile46)
sandTile46.setParent(_scene)
sandTile46.addComponentOrReplace(gltfShape8)
const transform310 = new Transform({
  position: new Vector3(22.20146942138672, 4.16016960144043, 6.333524703979492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile46.addComponentOrReplace(transform310)

const sandTile47 = new Entity('sandTile47')
engine.addEntity(sandTile47)
sandTile47.setParent(_scene)
sandTile47.addComponentOrReplace(gltfShape8)
const transform311 = new Transform({
  position: new Vector3(22.20146942138672, 4.16016960144043, 4.333524703979492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile47.addComponentOrReplace(transform311)

const sandTile48 = new Entity('sandTile48')
engine.addEntity(sandTile48)
sandTile48.setParent(_scene)
sandTile48.addComponentOrReplace(gltfShape8)
const transform312 = new Transform({
  position: new Vector3(24.127609252929688, 4.16016960144043, 4.345663070678711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile48.addComponentOrReplace(transform312)

const stairsGlassPanel3 = new Entity('stairsGlassPanel3')
engine.addEntity(stairsGlassPanel3)
stairsGlassPanel3.setParent(_scene)
stairsGlassPanel3.addComponentOrReplace(gltfShape4)
const transform313 = new Transform({
  position: new Vector3(40.5, 4, 3.1491923332214355),
  rotation: new Quaternion(-3.751338669766898e-15, -0.7233738899230957, 8.6232901708172e-8, -0.6904566287994385),
  scale: new Vector3(1.0000113248825073, 1, 1.0000113248825073)
})
stairsGlassPanel3.addComponentOrReplace(transform313)

const roofBeigeEdge5 = new Entity('roofBeigeEdge5')
engine.addEntity(roofBeigeEdge5)
roofBeigeEdge5.setParent(_scene)
roofBeigeEdge5.addComponentOrReplace(gltfShape7)
const transform314 = new Transform({
  position: new Vector3(29, 4.012827396392822, 7),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.0000109672546387, 1, 0.9484573006629944)
})
roofBeigeEdge5.addComponentOrReplace(transform314)

const roofBeigeEdge8 = new Entity('roofBeigeEdge8')
engine.addEntity(roofBeigeEdge8)
roofBeigeEdge8.setParent(_scene)
roofBeigeEdge8.addComponentOrReplace(gltfShape7)
const transform315 = new Transform({
  position: new Vector3(32.750328063964844, 4.012827396392822, 7.010700225830078),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.000011682510376, 1, 0.9484580159187317)
})
roofBeigeEdge8.addComponentOrReplace(transform315)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform316 = new Transform({
  position: new Vector3(19.933177947998047, 5.5, 3.4142708778381348),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(2.0000007152557373, 1, 1.0000003576278687)
})
imageFromURL12.addComponentOrReplace(transform316)

const roundGalleryLight12 = new Entity('roundGalleryLight12')
engine.addEntity(roundGalleryLight12)
roundGalleryLight12.setParent(_scene)
const transform317 = new Transform({
  position: new Vector3(20.066822052001953, 7, 3.5857291221618652),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight12.addComponentOrReplace(transform317)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform318 = new Transform({
  position: new Vector3(12, 5.5, 3.5),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(2.000000476837158, 1, 1.000000238418579)
})
imageFromURL13.addComponentOrReplace(transform318)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform319 = new Transform({
  position: new Vector3(32.93317794799805, 9.5, 2.9142704010009766),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(3.998713254928589, 2.25, 1.0006470680236816)
})
imageFromURL11.addComponentOrReplace(transform319)

const roundGalleryLight13 = new Entity('roundGalleryLight13')
engine.addEntity(roundGalleryLight13)
roundGalleryLight13.setParent(_scene)
const transform320 = new Transform({
  position: new Vector3(33.06682205200195, 12.5, 3.0857295989990234),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight13.addComponentOrReplace(transform320)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform321 = new Transform({
  position: new Vector3(32.93317794799805, 9.5, 2.8810107707977295),
  rotation: new Quaternion(2.3662332943735764e-14, -0.9999996423721313, 1.1920923270736239e-7, -0.0008183874888345599),
  scale: new Vector3(3.9987149238586426, 2.25, 1.0006473064422607)
})
imageFromURL14.addComponentOrReplace(transform321)

const roofBeigeEdge9 = new Entity('roofBeigeEdge9')
engine.addEntity(roofBeigeEdge9)
roofBeigeEdge9.setParent(_scene)
roofBeigeEdge9.addComponentOrReplace(gltfShape7)
const transform322 = new Transform({
  position: new Vector3(40.52525329589844, 0, 6.742011547088623),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.0000107288360596, 1, 0.9484570622444153)
})
roofBeigeEdge9.addComponentOrReplace(transform322)

const sandTile49 = new Entity('sandTile49')
engine.addEntity(sandTile49)
sandTile49.setParent(_scene)
sandTile49.addComponentOrReplace(gltfShape8)
const transform323 = new Transform({
  position: new Vector3(41.507301330566406, 4.16016960144043, 3.8166537284851074),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile49.addComponentOrReplace(transform323)

const sandTile51 = new Entity('sandTile51')
engine.addEntity(sandTile51)
sandTile51.setParent(_scene)
sandTile51.addComponentOrReplace(gltfShape8)
const transform324 = new Transform({
  position: new Vector3(43.433441162109375, 4.16016960144043, 5.828792095184326),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile51.addComponentOrReplace(transform324)

const sandTile53 = new Entity('sandTile53')
engine.addEntity(sandTile53)
sandTile53.setParent(_scene)
sandTile53.addComponentOrReplace(gltfShape8)
const transform325 = new Transform({
  position: new Vector3(41.507301330566406, 4.16016960144043, 5.816653728485107),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile53.addComponentOrReplace(transform325)

const sandTile55 = new Entity('sandTile55')
engine.addEntity(sandTile55)
sandTile55.setParent(_scene)
sandTile55.addComponentOrReplace(gltfShape8)
const transform326 = new Transform({
  position: new Vector3(43.433441162109375, 4.16016960144043, 3.828792095184326),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile55.addComponentOrReplace(transform326)

const sandTile56 = new Entity('sandTile56')
engine.addEntity(sandTile56)
sandTile56.setParent(_scene)
sandTile56.addComponentOrReplace(gltfShape8)
const transform327 = new Transform({
  position: new Vector3(35.55963134765625, 8.253853797912598, 3.9793128967285156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile56.addComponentOrReplace(transform327)

const sandTile50 = new Entity('sandTile50')
engine.addEntity(sandTile50)
sandTile50.setParent(_scene)
sandTile50.addComponentOrReplace(gltfShape8)
const transform328 = new Transform({
  position: new Vector3(35.55963134765625, 8.253853797912598, 5.996129035949707),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile50.addComponentOrReplace(transform328)

const sandTile52 = new Entity('sandTile52')
engine.addEntity(sandTile52)
sandTile52.setParent(_scene)
sandTile52.addComponentOrReplace(gltfShape8)
const transform329 = new Transform({
  position: new Vector3(33.69982147216797, 8.253853797912598, 5.996129035949707),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile52.addComponentOrReplace(transform329)

const sandTile54 = new Entity('sandTile54')
engine.addEntity(sandTile54)
sandTile54.setParent(_scene)
sandTile54.addComponentOrReplace(gltfShape8)
const transform330 = new Transform({
  position: new Vector3(33.69982147216797, 8.253853797912598, 3.9793128967285156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile54.addComponentOrReplace(transform330)

const sandTile57 = new Entity('sandTile57')
engine.addEntity(sandTile57)
sandTile57.setParent(_scene)
sandTile57.addComponentOrReplace(gltfShape8)
const transform331 = new Transform({
  position: new Vector3(31.862403869628906, 8.253853797912598, 5.996129035949707),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile57.addComponentOrReplace(transform331)

const sandTile58 = new Entity('sandTile58')
engine.addEntity(sandTile58)
sandTile58.setParent(_scene)
sandTile58.addComponentOrReplace(gltfShape8)
const transform332 = new Transform({
  position: new Vector3(31.862403869628906, 8.253853797912598, 3.9793128967285156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile58.addComponentOrReplace(transform332)

const sandTile59 = new Entity('sandTile59')
engine.addEntity(sandTile59)
sandTile59.setParent(_scene)
sandTile59.addComponentOrReplace(gltfShape8)
const transform333 = new Transform({
  position: new Vector3(30.033363342285156, 8.253853797912598, 5.982881546020508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile59.addComponentOrReplace(transform333)

const sandTile60 = new Entity('sandTile60')
engine.addEntity(sandTile60)
sandTile60.setParent(_scene)
sandTile60.addComponentOrReplace(gltfShape8)
const transform334 = new Transform({
  position: new Vector3(30.033363342285156, 8.253853797912598, 3.9660656452178955),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile60.addComponentOrReplace(transform334)

const wallcornerPlants = new Entity('wallcornerPlants')
engine.addEntity(wallcornerPlants)
wallcornerPlants.setParent(_scene)
const transform335 = new Transform({
  position: new Vector3(40.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallcornerPlants.addComponentOrReplace(transform335)
const gltfShape10 = new GLTFShape("b44c0769-6ad9-48fc-885a-6b1fefcfc482/PlantCorner.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
wallcornerPlants.addComponentOrReplace(gltfShape10)

const windowMagnoliaLarge = new Entity('windowMagnoliaLarge')
engine.addEntity(windowMagnoliaLarge)
windowMagnoliaLarge.setParent(_scene)
const transform336 = new Transform({
  position: new Vector3(42.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge.addComponentOrReplace(transform336)
const gltfShape11 = new GLTFShape("d0aba886-62a2-4e6c-9681-a2dd1557ca61/MagnoliaWindowLarge.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
windowMagnoliaLarge.addComponentOrReplace(gltfShape11)

const windowMagnoliaLarge2 = new Entity('windowMagnoliaLarge2')
engine.addEntity(windowMagnoliaLarge2)
windowMagnoliaLarge2.setParent(_scene)
windowMagnoliaLarge2.addComponentOrReplace(gltfShape11)
const transform337 = new Transform({
  position: new Vector3(44.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge2.addComponentOrReplace(transform337)

const windowMagnoliaLarge28 = new Entity('windowMagnoliaLarge28')
engine.addEntity(windowMagnoliaLarge28)
windowMagnoliaLarge28.setParent(_scene)
windowMagnoliaLarge28.addComponentOrReplace(gltfShape11)
const transform338 = new Transform({
  position: new Vector3(68.51629638671875, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge28.addComponentOrReplace(transform338)

const windowMagnoliaLarge29 = new Entity('windowMagnoliaLarge29')
engine.addEntity(windowMagnoliaLarge29)
windowMagnoliaLarge29.setParent(_scene)
windowMagnoliaLarge29.addComponentOrReplace(gltfShape11)
const transform339 = new Transform({
  position: new Vector3(70.51480865478516, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge29.addComponentOrReplace(transform339)

const windowMagnoliaLarge30 = new Entity('windowMagnoliaLarge30')
engine.addEntity(windowMagnoliaLarge30)
windowMagnoliaLarge30.setParent(_scene)
windowMagnoliaLarge30.addComponentOrReplace(gltfShape11)
const transform340 = new Transform({
  position: new Vector3(72.5133285522461, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge30.addComponentOrReplace(transform340)

const windowMagnoliaLarge31 = new Entity('windowMagnoliaLarge31')
engine.addEntity(windowMagnoliaLarge31)
windowMagnoliaLarge31.setParent(_scene)
windowMagnoliaLarge31.addComponentOrReplace(gltfShape11)
const transform341 = new Transform({
  position: new Vector3(74.51184844970703, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge31.addComponentOrReplace(transform341)

const windowMagnoliaLarge32 = new Entity('windowMagnoliaLarge32')
engine.addEntity(windowMagnoliaLarge32)
windowMagnoliaLarge32.setParent(_scene)
windowMagnoliaLarge32.addComponentOrReplace(gltfShape11)
const transform342 = new Transform({
  position: new Vector3(76.51036071777344, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge32.addComponentOrReplace(transform342)

const windowMagnoliaLarge33 = new Entity('windowMagnoliaLarge33')
engine.addEntity(windowMagnoliaLarge33)
windowMagnoliaLarge33.setParent(_scene)
windowMagnoliaLarge33.addComponentOrReplace(gltfShape11)
const transform343 = new Transform({
  position: new Vector3(78.50888061523438, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge33.addComponentOrReplace(transform343)

const windowMagnoliaLarge34 = new Entity('windowMagnoliaLarge34')
engine.addEntity(windowMagnoliaLarge34)
windowMagnoliaLarge34.setParent(_scene)
windowMagnoliaLarge34.addComponentOrReplace(gltfShape11)
const transform344 = new Transform({
  position: new Vector3(80.50739288330078, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge34.addComponentOrReplace(transform344)

const windowMagnoliaLarge35 = new Entity('windowMagnoliaLarge35')
engine.addEntity(windowMagnoliaLarge35)
windowMagnoliaLarge35.setParent(_scene)
windowMagnoliaLarge35.addComponentOrReplace(gltfShape11)
const transform345 = new Transform({
  position: new Vector3(82.50591278076172, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge35.addComponentOrReplace(transform345)

const windowMagnoliaLarge36 = new Entity('windowMagnoliaLarge36')
engine.addEntity(windowMagnoliaLarge36)
windowMagnoliaLarge36.setParent(_scene)
windowMagnoliaLarge36.addComponentOrReplace(gltfShape11)
const transform346 = new Transform({
  position: new Vector3(84.50443267822266, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge36.addComponentOrReplace(transform346)

const windowMagnoliaLarge37 = new Entity('windowMagnoliaLarge37')
engine.addEntity(windowMagnoliaLarge37)
windowMagnoliaLarge37.setParent(_scene)
windowMagnoliaLarge37.addComponentOrReplace(gltfShape11)
const transform347 = new Transform({
  position: new Vector3(86.50294494628906, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge37.addComponentOrReplace(transform347)

const jungleFern = new Entity('jungleFern')
engine.addEntity(jungleFern)
jungleFern.setParent(_scene)
const transform348 = new Transform({
  position: new Vector3(17.5, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleFern.addComponentOrReplace(transform348)
const gltfShape12 = new GLTFShape("3a4e677f-88c7-4616-bbf0-9a97055463d6/JunglePlant_01/JunglePlant_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
jungleFern.addComponentOrReplace(gltfShape12)

const monsteraDeliciosa = new Entity('monsteraDeliciosa')
engine.addEntity(monsteraDeliciosa)
monsteraDeliciosa.setParent(_scene)
const transform349 = new Transform({
  position: new Vector3(46.5, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
monsteraDeliciosa.addComponentOrReplace(transform349)
const gltfShape13 = new GLTFShape("4563ad1f-84d1-47d5-a7ac-f159ba59b3e7/JunglePlant_03/JunglePlant_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
monsteraDeliciosa.addComponentOrReplace(gltfShape13)

const beanbagPink = new Entity('beanbagPink')
engine.addEntity(beanbagPink)
beanbagPink.setParent(_scene)
const transform350 = new Transform({
  position: new Vector3(26, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beanbagPink.addComponentOrReplace(transform350)
const gltfShape14 = new GLTFShape("ff6f1a6e-ea64-42ce-b657-dfda8b460382/Beanbag_Pink.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
beanbagPink.addComponentOrReplace(gltfShape14)

const lightDecor = new Entity('lightDecor')
engine.addEntity(lightDecor)
lightDecor.setParent(_scene)
const transform351 = new Transform({
  position: new Vector3(76, 0, 59),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
lightDecor.addComponentOrReplace(transform351)
const gltfShape15 = new GLTFShape("49f3ab80-9023-419e-aa87-87f6a49ce517/Light_Decor5.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
lightDecor.addComponentOrReplace(gltfShape15)

const lightDecor2 = new Entity('lightDecor2')
engine.addEntity(lightDecor2)
lightDecor2.setParent(_scene)
const transform352 = new Transform({
  position: new Vector3(46.5, 0, 68.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightDecor2.addComponentOrReplace(transform352)
const gltfShape16 = new GLTFShape("82680db4-c0d7-46ea-b087-eee55218f481/Light_Decor7.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
lightDecor2.addComponentOrReplace(gltfShape16)

const windowMagnoliaLarge3 = new Entity('windowMagnoliaLarge3')
engine.addEntity(windowMagnoliaLarge3)
windowMagnoliaLarge3.setParent(_scene)
windowMagnoliaLarge3.addComponentOrReplace(gltfShape11)
const transform353 = new Transform({
  position: new Vector3(22.989545822143555, 0, 3.6489779949188232),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge3.addComponentOrReplace(transform353)

const windowMagnoliaLarge4 = new Entity('windowMagnoliaLarge4')
engine.addEntity(windowMagnoliaLarge4)
windowMagnoliaLarge4.setParent(_scene)
windowMagnoliaLarge4.addComponentOrReplace(gltfShape11)
const transform354 = new Transform({
  position: new Vector3(24.989545822143555, 0, 3.6489779949188232),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge4.addComponentOrReplace(transform354)

const floatingDecor = new Entity('floatingDecor')
engine.addEntity(floatingDecor)
floatingDecor.setParent(_scene)
const transform355 = new Transform({
  position: new Vector3(26.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floatingDecor.addComponentOrReplace(transform355)
const gltfShape17 = new GLTFShape("a8750c36-cc8d-4735-b85f-201ed131e66d/Floating_Decor.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
floatingDecor.addComponentOrReplace(gltfShape17)

const woodTile178 = new Entity('woodTile178')
engine.addEntity(woodTile178)
woodTile178.setParent(_scene)
woodTile178.addComponentOrReplace(gltfShape3)
const transform356 = new Transform({
  position: new Vector3(49.14462661743164, 0, 1.1068224906921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile178.addComponentOrReplace(transform356)

const woodTile179 = new Entity('woodTile179')
engine.addEntity(woodTile179)
woodTile179.setParent(_scene)
woodTile179.addComponentOrReplace(gltfShape3)
const transform357 = new Transform({
  position: new Vector3(47.14462661743164, 0, 1.1068224906921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile179.addComponentOrReplace(transform357)

const woodTile180 = new Entity('woodTile180')
engine.addEntity(woodTile180)
woodTile180.setParent(_scene)
woodTile180.addComponentOrReplace(gltfShape3)
const transform358 = new Transform({
  position: new Vector3(47.14462661743164, 0, 3.1068224906921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile180.addComponentOrReplace(transform358)

const woodTile181 = new Entity('woodTile181')
engine.addEntity(woodTile181)
woodTile181.setParent(_scene)
woodTile181.addComponentOrReplace(gltfShape3)
const transform359 = new Transform({
  position: new Vector3(49.14462661743164, 0, 3.1068224906921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile181.addComponentOrReplace(transform359)

const wallcornerPlants2 = new Entity('wallcornerPlants2')
engine.addEntity(wallcornerPlants2)
wallcornerPlants2.setParent(_scene)
wallcornerPlants2.addComponentOrReplace(gltfShape10)
const transform360 = new Transform({
  position: new Vector3(57, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallcornerPlants2.addComponentOrReplace(transform360)

const aloevera = new Entity('aloevera')
engine.addEntity(aloevera)
aloevera.setParent(_scene)
const transform361 = new Transform({
  position: new Vector3(35, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
aloevera.addComponentOrReplace(transform361)
const gltfShape18 = new GLTFShape("0ed26898-a163-49b1-bb8c-d63c5d34bf02/aloevera.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
aloevera.addComponentOrReplace(gltfShape18)

const sansTitre = new Entity('sansTitre')
engine.addEntity(sansTitre)
sansTitre.setParent(_scene)
const transform362 = new Transform({
  position: new Vector3(54.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sansTitre.addComponentOrReplace(transform362)
const gltfShape19 = new GLTFShape("d5ef8ae2-744a-4873-8915-468e98d6d435/Sans titre.gltf")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
sansTitre.addComponentOrReplace(gltfShape19)

const sansTitre2 = new Entity('sansTitre2')
engine.addEntity(sansTitre2)
sansTitre2.setParent(_scene)
const transform363 = new Transform({
  position: new Vector3(51.5, 10, 65.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(16.17810821533203, 16.17810821533203, 16.17810821533203)
})
sansTitre2.addComponentOrReplace(transform363)
const gltfShape20 = new GLTFShape("4266e858-5937-42da-a981-494bf19c8df9/Sans titre.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
sansTitre2.addComponentOrReplace(gltfShape20)

const roofSimple3 = new Entity('roofSimple3')
engine.addEntity(roofSimple3)
roofSimple3.setParent(_scene)
const gltfShape21 = new GLTFShape("d24cc779-03c9-40b1-ba2f-b64ca9032e20/SimpleRoof.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
roofSimple3.addComponentOrReplace(gltfShape21)
const transform364 = new Transform({
  position: new Vector3(78.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
roofSimple3.addComponentOrReplace(transform364)

const roofSimple4 = new Entity('roofSimple4')
engine.addEntity(roofSimple4)
roofSimple4.setParent(_scene)
roofSimple4.addComponentOrReplace(gltfShape21)
const transform365 = new Transform({
  position: new Vector3(82.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
roofSimple4.addComponentOrReplace(transform365)

const roofSimple5 = new Entity('roofSimple5')
engine.addEntity(roofSimple5)
roofSimple5.setParent(_scene)
roofSimple5.addComponentOrReplace(gltfShape21)
const transform366 = new Transform({
  position: new Vector3(70.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
roofSimple5.addComponentOrReplace(transform366)

const roofSimple6 = new Entity('roofSimple6')
engine.addEntity(roofSimple6)
roofSimple6.setParent(_scene)
roofSimple6.addComponentOrReplace(gltfShape21)
const transform367 = new Transform({
  position: new Vector3(74.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
roofSimple6.addComponentOrReplace(transform367)

const roofSimple = new Entity('roofSimple')
engine.addEntity(roofSimple)
roofSimple.setParent(_scene)
roofSimple.addComponentOrReplace(gltfShape21)
const transform368 = new Transform({
  position: new Vector3(66.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
roofSimple.addComponentOrReplace(transform368)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform369 = new Transform({
  position: new Vector3(46, 0, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform369)

const lightDecor3 = new Entity('lightDecor3')
engine.addEntity(lightDecor3)
lightDecor3.setParent(_scene)
const transform370 = new Transform({
  position: new Vector3(74, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightDecor3.addComponentOrReplace(transform370)
const gltfShape22 = new GLTFShape("cc93be70-5b8a-4598-83a9-3822ba15539b/Light_Decor2.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
lightDecor3.addComponentOrReplace(gltfShape22)

const windowMagnoliaLarge5 = new Entity('windowMagnoliaLarge5')
engine.addEntity(windowMagnoliaLarge5)
windowMagnoliaLarge5.setParent(_scene)
windowMagnoliaLarge5.addComponentOrReplace(gltfShape11)
const transform371 = new Transform({
  position: new Vector3(68.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge5.addComponentOrReplace(transform371)

const windowMagnoliaLarge6 = new Entity('windowMagnoliaLarge6')
engine.addEntity(windowMagnoliaLarge6)
windowMagnoliaLarge6.setParent(_scene)
windowMagnoliaLarge6.addComponentOrReplace(gltfShape11)
const transform372 = new Transform({
  position: new Vector3(70.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge6.addComponentOrReplace(transform372)

const windowMagnoliaLarge7 = new Entity('windowMagnoliaLarge7')
engine.addEntity(windowMagnoliaLarge7)
windowMagnoliaLarge7.setParent(_scene)
windowMagnoliaLarge7.addComponentOrReplace(gltfShape11)
const transform373 = new Transform({
  position: new Vector3(86.49378967285156, 0, 2.8667943477630615),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge7.addComponentOrReplace(transform373)

const windowMagnoliaLarge8 = new Entity('windowMagnoliaLarge8')
engine.addEntity(windowMagnoliaLarge8)
windowMagnoliaLarge8.setParent(_scene)
windowMagnoliaLarge8.addComponentOrReplace(gltfShape11)
const transform374 = new Transform({
  position: new Vector3(84.56000518798828, 0, 2.868539810180664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge8.addComponentOrReplace(transform374)

const zigmoonTitre = new Entity('zigmoonTitre')
engine.addEntity(zigmoonTitre)
zigmoonTitre.setParent(_scene)
const transform375 = new Transform({
  position: new Vector3(17.75, 1, 38),
  rotation: new Quaternion(3.836964383371888e-15, 0.9569403529167175, -1.140761582973937e-7, 0.2902847230434418),
  scale: new Vector3(9.500003814697266, 9.5, 9.500003814697266)
})
zigmoonTitre.addComponentOrReplace(transform375)
const gltfShape23 = new GLTFShape("a8840adf-bf5e-4f2b-9379-250ac014e9fe/zigmoon_titre.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
zigmoonTitre.addComponentOrReplace(gltfShape23)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform376 = new Transform({
  position: new Vector3(51, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
twitterButtonLink.addComponentOrReplace(transform376)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform377 = new Transform({
  position: new Vector3(50, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform377)

const sansTitre3 = new Entity('sansTitre3')
engine.addEntity(sansTitre3)
sansTitre3.setParent(_scene)
const transform378 = new Transform({
  position: new Vector3(75.5, 3.5, 29.5),
  rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(-65.02499389648438, -65.02500915527344, -65.02499389648438)
})
sansTitre3.addComponentOrReplace(transform378)
const gltfShape24 = new GLTFShape("32b99380-c865-4d23-9a8b-e9347a60d1b0/Sans titre.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
sansTitre3.addComponentOrReplace(gltfShape24)

const sansTitre6 = new Entity('sansTitre6')
engine.addEntity(sansTitre6)
sansTitre6.setParent(_scene)
sansTitre6.addComponentOrReplace(gltfShape24)
const transform379 = new Transform({
  position: new Vector3(88, 9.5, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-7.528587341308594, -7.528587341308594, -7.528587341308594)
})
sansTitre6.addComponentOrReplace(transform379)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script1.spawn(videoScreenStanding, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding","actionId":"toggle","values":{}}]}, createChannel(channelId, videoScreenStanding, channelBus))
script2.spawn(verticalBluePad, {"distance":15,"speed":4,"autoStart":true,"onReachEnd":[{"entityName":"verticalBluePad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBluePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBluePad, channelBus))
script3.spawn(signpostDirections, {"textTop":"Watch films","textLower":"Expo.","fontSize":21.5}, createChannel(channelId, signpostDirections, channelBus))
script4.spawn(imageFromURL, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL, channelBus))
script4.spawn(imageFromURL2, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL2, channelBus))
script4.spawn(imageFromURL3, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL3, channelBus))
script4.spawn(imageFromURL4, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL4, channelBus))
script4.spawn(imageFromURL5, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL5, channelBus))
script4.spawn(imageFromURL6, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL6, channelBus))
script4.spawn(imageFromURL8, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL8, channelBus))
script4.spawn(imageFromURL9, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL9, channelBus))
script5.spawn(roundGalleryLight, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight, channelBus))
script5.spawn(roundGalleryLight2, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight2, channelBus))
script5.spawn(roundGalleryLight3, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight3, channelBus))
script5.spawn(roundGalleryLight4, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight4, channelBus))
script5.spawn(roundGalleryLight5, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight5, channelBus))
script5.spawn(roundGalleryLight6, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight6, channelBus))
script5.spawn(roundGalleryLight7, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight7, channelBus))
script5.spawn(roundGalleryLight8, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight8, channelBus))
script4.spawn(imageFromURL7, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL7, channelBus))
script5.spawn(roundGalleryLight9, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight9, channelBus))
script5.spawn(roundGalleryLight10, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight10, channelBus))
script5.spawn(roundGalleryLight11, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight11, channelBus))
script4.spawn(imageFromURL10, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL10, channelBus))
script4.spawn(imageFromURL12, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL12, channelBus))
script5.spawn(roundGalleryLight12, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight12, channelBus))
script4.spawn(imageFromURL13, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL13, channelBus))
script4.spawn(imageFromURL11, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL11, channelBus))
script5.spawn(roundGalleryLight13, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight13, channelBus))
script4.spawn(imageFromURL14, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL14, channelBus))
script6.spawn(ambientSound, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script7.spawn(twitterButtonLink, {"url":"zigmoon","bnw":false,"name":"zigmoon"}, createChannel(channelId, twitterButtonLink, channelBus))
script8.spawn(externalLink, {"url":"https://zigmoon.com"}, createChannel(channelId, externalLink, channelBus))