(module
 (type $FUNCSIG$ff (func (param f32) (result f32)))
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "getSqrt" (func $getSqrt))
 (func $getSqrt (; 0 ;) (param $0 f32) (result f32)
  (f32.sqrt
   (get_local $0)
  )
 )
)
