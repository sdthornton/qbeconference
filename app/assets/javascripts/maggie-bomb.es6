const IMAGES = [
  'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/543999_147183925431755_1234611862_n.jpg?oh=50f93375fe73b426b5e2a9bba7db5663&oe=58ADE7EF',
  'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/13686750_621532971330179_280965889321343367_n.jpg?oh=08a5e3c98f3149f8c867973ec349386a&oe=58608345',
  'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/11824921_495341913949286_6295435759827285062_n.jpg?oh=afb4c659995be403c31830855e7c3c70&oe=587698BA',
  'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/11855865_500556403427837_8493795998603880409_n.jpg?oh=11c4634fcf59c0b957aab5156698901c&oe=586E41A6',
  'https://scontent.fsnc1-2.fna.fbcdn.net/t31.0-8/12244839_528849843931826_5198111915307936410_o.jpg',
  'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/12390960_535567156593428_2521558571587472339_n.jpg?oh=cc53c562aec21059e8c467e0e1de3c07&oe=58AB6741',
  'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/10906295_413473808802764_3086826692764142393_n.jpg?oh=b45ed29ed240371a241d9cc2a8b8a2bc&oe=58674710',
  'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/10632644_350183981798414_1921313173205542463_n.jpg?oh=12e8674501c6c8448339b7227b4ec1f8&oe=5873CEF6',
  'https://scontent.fsnc1-2.fna.fbcdn.net/t31.0-8/1782536_279558992194247_1796500738_o.jpg',
  'https://scontent.fsnc1-2.fna.fbcdn.net/t31.0-8/1077053_216524995164314_1831471602_o.jpg',
  'https://scontent.fsnc1-2.fna.fbcdn.net/t31.0-8/1073847_215348905281923_1158202374_o.jpg',
  'https://scontent.fsnc1-2.fna.fbcdn.net/t31.0-8/1073313_215348045282009_1767439377_o.jpg',
  'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/65929_165233793626768_607366285_n.jpg?oh=874664c68b34f060a5a3fec0d0310897&oe=5865EA58',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e35/14026597_1052117171509490_519193117_n.jpg?ig_cache_key=MTMyMTQwNTc4MzgyNDcwNTgwNg%3D%3D.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e35/13151092_1190354724342024_1425577442_n.jpg?ig_cache_key=MTI1MDM4ODg2NzQzNDc4Njk4Mg%3D%3D.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e35/11363977_1072869246105849_1442062004_n.jpg?ig_cache_key=MTIyNjQ4ODUzMDAzODc5NjQ2NA%3D%3D.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e35/12907141_1728289110742309_530375074_n.jpg?ig_cache_key=MTIxNTU5MDg3OTQyMDMzMDQwOA%3D%3D.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/s480x480/e35/12729563_1684196625155436_1554702269_n.jpg?ig_cache_key=MTE5MDM2MzA1MjU1OTQxMzYxMQ%3D%3D.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e35/12545278_1649703948615282_582903269_n.jpg?ig_cache_key=MTE2MDI1Mjc3MzM0NzczMzg3Ng%3D%3D.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/sh0.08/e35/p750x750/11925619_1492994597682187_351482180_n.jpg?ig_cache_key=MTA2NjcxMzIyNjQwNDU0MTA0NA%3D%3D.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11374051_1586121771667236_445365323_n.jpg?ig_cache_key=OTkzODg2MjIwODEwMzAyMTQz.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11111265_835736629812833_1333588980_n.jpg?ig_cache_key=OTY4OTkwNTg0ODk4MTcxNDMz.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/925066_1089162657767973_260966427_n.jpg?ig_cache_key=OTQ3Mjk4NDQyNjYwMzkzMTY1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11055462_1489746801247897_1821353624_n.jpg?ig_cache_key=OTM2NTcyNzI0MzM5MTI3MTQ1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10932182_438305632984567_1156388463_n.jpg?ig_cache_key=OTAxMTM2MjM5OTI2NTU0Nzc1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10903276_390867067741423_1494912184_n.jpg?ig_cache_key=ODk4MTgyODEyMTU4MjQzMzc4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10919120_763729317042673_1025601919_n.jpg?ig_cache_key=ODkzNjQ0MDgwMzI3NTM2ODQ0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10838631_1533285360259559_1537292737_n.jpg?ig_cache_key=ODc3MDgwNDk4OTIwMDc1MzU3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10838535_605611479568329_1741355458_n.jpg?ig_cache_key=ODY2MjM1OTg1NDk0Mzg5MDAy.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10665533_288700121332934_1234192092_n.jpg?ig_cache_key=ODA1NDQxODE3NjYzMDkxNDQ3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10561190_282010898653989_1005931306_n.jpg?ig_cache_key=NzgxOTk5NzE1NTQ1NjI1MjA3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10576131_1476692559243758_1307207025_n.jpg?ig_cache_key=NzcxMTY5NjM2NTU3MTA3NTYw.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/925929_597693417011130_1044065352_n.jpg?ig_cache_key=NzU5ODU0MTYwOTkyMzgzMDI4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/926811_264872610382442_1199067572_n.jpg?ig_cache_key=NzQ2NzA3OTk1MjM3MTM0Mzg0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10369301_1508814636007070_189541586_n.jpg?ig_cache_key=NzMyMjcwMzg5MzEzMjUzNjMx.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/10254220_679399742121025_590568450_n.jpg?ig_cache_key=NzA0NTAxMjMzNzQyNjIzMDgx.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11374534_1634288656808732_2016481605_n.jpg?ig_cache_key=Njc2MzYyOTExMjM3Mzg3MjQ3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11330702_462468070582021_1953366828_n.jpg?ig_cache_key=NjcwNDEwNzczNTI1MDE2Nzc0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/891302_1431588993739507_2088812445_n.jpg?ig_cache_key=NjIzNTIyOTIzODYxMDk1MDM4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/1516840_1439000262997697_1527892431_n.jpg?ig_cache_key=NjM1MTMzNzE4ODEwMTc3ODkz.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11380813_364474827095145_895412172_n.jpg?ig_cache_key=NjIyODA1NDI0ODY5ODQ3NDUz.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11380896_858780570877972_689791647_n.jpg?ig_cache_key=NjE3NTYwNjE2NjA1NjkyMzU1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11282762_1635259473352943_1818606775_n.jpg?ig_cache_key=NjE3Mzg5NzE3MTIyMjk4NDE1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/1389379_222658114571977_1814627693_n.jpg?ig_cache_key=NjA0NjMxNzM4NjE0NjU4MDA1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/1389747_214831672029559_9896921_n.jpg?ig_cache_key=NjAwMjg2NzAzODI3OTIzNzI3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/1389391_642446109153505_509568617_n.jpg?ig_cache_key=NTk4NTU0NzAyNjc0NTA2NjA4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11333593_704825866330853_1291955296_n.jpg?ig_cache_key=NTU3MzA5NjA0MzY0Mzk4Nzkz.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11357413_1621420131403101_37098349_n.jpg?ig_cache_key=NTY2NjI1OTA4NzkxNTU0MjEw.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11375264_480365222127480_737602426_n.jpg?ig_cache_key=NTIwMzAxNTUxMTE5MzQ4MjAw.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11378821_1587241008231130_185497501_n.jpg?ig_cache_key=NTE0MDA5OTQ3NTcyMTIyNTAw.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11273205_696550013824648_981985194_n.jpg?ig_cache_key=NTEwNDU0MjM2Mzk3Mjg2MDUy.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11283209_1494367320853678_1606988342_n.jpg?ig_cache_key=NDk2NTU5MjQ2MTQ3NDMzMTE4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11266345_848123705268247_1457257879_n.jpg?ig_cache_key=NDg5Mjk4MzEwMzgyNTk2ODA4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11328245_833469273374417_1145425290_n.jpg?ig_cache_key=NDc5NTQyOTk4NzY3MzUwNjEy.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11312494_1649212141978064_799550351_n.jpg?ig_cache_key=NDU4NjQ2OTQ0NzkwNDU5MTA0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11358180_1028098730556277_797084136_n.jpg?ig_cache_key=NDQ1OTIwMTA5Mzg0MjgyMzI5.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11261951_1445092605785487_1190558270_n.jpg?ig_cache_key=NDQ0ODIxOTg2MjA1MzQ3OTk1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11266435_670625763081404_1750434217_n.jpg?ig_cache_key=NDM4Njk2NTQyMDQ5NTE0MTk1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11283297_620273521441730_985427152_n.jpg?ig_cache_key=NDMwNjEzNDgwNTU2MzExMTAz.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11243073_993406104003124_515242308_n.jpg?ig_cache_key=NDIyMzY3NzkyODk0Njg2MDAw.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11258563_976665472346621_447124642_n.jpg?ig_cache_key=NDE2NzA4MTg1ODk5Nzc0ODI0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11255732_1443860952592580_1020042403_n.jpg?ig_cache_key=Mzk1OTM5NTQ5ODIwMDcyODcy.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11232872_781634891956331_879666046_n.jpg?ig_cache_key=MzgzMzI5NzI5NzI0MTMzODMw.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11263510_1609859882630036_1402340490_n.jpg?ig_cache_key=MzcyNjA1MjE0ODk5Njc5Mjc0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11240743_1582192375387399_853590384_n.jpg?ig_cache_key=MzQxMzY3OTMzNDA5MDE0NTM4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11242528_1590695011210436_1926351223_n.jpg?ig_cache_key=MzM2OTQxOTE0NDg4OTQzMzE4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11078722_480840072064326_1934957352_n.jpg?ig_cache_key=MzMyNjQzMDQwNzM1NjM3OTM1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11235902_652482284885187_268160628_n.jpg?ig_cache_key=MzI5NjI5NTgyNzk2NjMzMDc5.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11258039_377649532423509_423586875_n.jpg?ig_cache_key=MzE4MzY2Nzc2NzI2MjM3Nzg1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11232573_547437598727828_883060353_n.jpg?ig_cache_key=MzE0NTk1MDYxOTMyMDc3OTk4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11236205_389571617892866_261904645_n.jpg?ig_cache_key=MzAyMTA5NTI2NDM3MjQ0OTU1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11208178_1449623528668415_171059256_n.jpg?ig_cache_key=Mjk2NjAyOTgyMzc5NTMzMjU0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11241696_1446021755709232_216638898_n.jpg?ig_cache_key=Mjk2MjgzNjc5NDk1MTM5NTk3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11232838_746808108773727_225208088_n.jpg?ig_cache_key=Mjg5OTQ4NTM3Mzg2MjgzNDc3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11184717_835156319907683_853832488_n.jpg?ig_cache_key=Mjg5NzMzOTUxMDM5MDU3OTk2.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11205767_696809930465303_1212555401_n.jpg?ig_cache_key=Mjg5NzMxNjAzNTg3NzcyNDYw.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11230506_1570547496552561_356473849_n.jpg?ig_cache_key=Mjg2MTM5OTYyMTg0NTQ0NTk1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11193086_1578074732442811_1746100123_n.jpg?ig_cache_key=MjgxODE0ODU0NzI5MDUyODI0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11208207_1433011450348564_1321115531_n.jpg?ig_cache_key=Mjc5NzIyNjU3MTY2NzY2NzM1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11192609_1564289383845171_828539875_n.jpg?ig_cache_key=Mjc1NTA5MjI4NzAwODA3Njk1.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11190694_1441485386164335_1900562523_n.jpg?ig_cache_key=MjY1MjU3NDE2NDA4MjgxODg2.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11184572_927413067279377_618118343_n.jpg?ig_cache_key=MjYzMDU2NDI2MTc1MTQ4OTAz.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11189446_466592676823839_1754758715_n.jpg?ig_cache_key=MjYxMDA1MzQ3NzA3MDA3Nzk0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11184626_653133878151654_1170622214_n.jpg?ig_cache_key=MjYxNjIyMzI0NzY3MDc3MjI4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11189553_1579400149008206_1027560811_n.jpg?ig_cache_key=MjU0NTAyMTMzMzUyNDc3NDM0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11190056_1576500435951323_1679776450_n.jpg?ig_cache_key=MjUxNTU2MTI1Njg1NDI4OTU3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11189758_1597417470542339_1862002397_n.jpg?ig_cache_key=MjUwOTMwNzY3MTIyNTEwMTMw.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11186859_1393478900978831_349130543_n.jpg?ig_cache_key=MjQ5MTE1NTY4NjEwNTg3NTUy.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11202996_1563483000570431_1130074726_n.jpg?ig_cache_key=MjI2NjY5NzA1NDM5MzI2OTkx.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11187093_1572263763024615_477005442_n.jpg?ig_cache_key=MjE4Njk0OTY2NTk0ODc1ODUy.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11190133_983945664971375_624721093_n.jpg?ig_cache_key=MjE2MDU2NTY1OTI4NDA4MDQy.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11176398_404361723079356_1962769748_n.jpg?ig_cache_key=MTkyMDU0MDk2NTQyMTUxMDY3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11176240_1589712927934559_1162519589_n.jpg?ig_cache_key=MTg1NzI0MjM1MjYzMzU3OTM0.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11189955_796759347080452_1699553072_n.jpg?ig_cache_key=MTgwNDIxNTU4MzcxNDY0MTI4.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11191478_849456101807956_1904199832_n.jpg?ig_cache_key=MTc5NzIzNzA4NTExNjYyNjk2.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11191356_815538315149449_1437907251_n.jpg?ig_cache_key=MTcyNDMwMDkzMzMwNTI2NTk3.2',
  'https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e15/11142835_669360479858305_1030039552_n.jpg?ig_cache_key=MTY0NjIyNjU3ODgyMjcxODgy.2'
];

window.QBE || (window.QBE = {});
QBE.MaggieBomb = class MaggieBomb {
  constructor() {
    this.images = IMAGES;
    this.lastStamp = 0;

    const pattern = "38384040373937397765717173691613";
    let maggieInput = "";
    document.addEventListener('keydown', (e) => {
      maggieInput += e.keyCode;
      if (maggieInput.length  > pattern.length) {
        maggieInput = maggieInput.substr((maggieInput.length - pattern.length));
      }
      if (maggieInput == pattern) {
        e.preventDefault();
        maggieInput = "";

        this.prepareExplosion();

        return false;
      }
    });
  }

  getRandomImage() {
    let index = Math.floor(Math.random() * this.images.length);
    let image = this.images.splice(index, 1)[0];
    return image;
  }

  placeImage() {
    let x = Math.max(0, Math.min(100, Math.ceil(Math.random() * 100))) + '%';
    let y = Math.max(0, Math.min(100, Math.ceil(Math.random() * 100))) + '%';
    let background = this.getRandomImage();

    let div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.height = '100%';
    div.style.width = '100%';
    div.style.backgroundPosition = x + y;
    div.style.backgroundSize = 'contain';
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundImage = 'url("' + background + '")';
    div.style.left = 0;
    div.style.top = 0;

    document.body.appendChild(div);
  }

  countdown(timestamp) {
    if (timestamp > this.lastStamp + 500) {
      this.lastStamp = timestamp;
      this.placeImage();
      if (this.images.length < 1) {
        cancelAnimationFrame(this.runner);
        return false;
      }
    }

    return this.runner = requestAnimationFrame((stamp) => this.countdown(stamp));
  }

  prepareExplosion() {
    let text = document.createElement('h1');
    text.style.position = 'fixed';
    text.style.top = 0;
    text.style.left = 0;
    text.style.height = '100%';
    text.style.width = '100%';
    text.style.textAlign = 'center';
    text.style.lineHeight = '100vh';
    text.style.color = 'white';
    text.style.background = 'rgba(0,0,0,0.65)';
    text.style.fontWeight = '700';
    text.innerText = "MAGGIE BOMB!";

    document.body.style.overflow = 'hidden';
    document.body.appendChild(text);

    let bark = new Audio('https://upload.wikimedia.org/wikipedia/commons/5/58/Barking_of_a_dog_2.ogg');
    bark.play();

    setTimeout(() => {
      this.runner = requestAnimationFrame((stamp) => this.countdown(stamp));
    }, 1000);
  }
}

new QBE.MaggieBomb();
