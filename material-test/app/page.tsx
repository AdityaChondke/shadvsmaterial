import BasicButtons from '@/components/ui/BasicButtons'

export default function Home() {
  return (
    <div style={{display:'flex',flexDirection:'column', gap:'20px',alignContent:'center', alignItems:'center', width: '650px', justifyContent:'space-between'}}>
      
      <div style={{display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center', width: '650px', justifyContent:'space-between'}}>
      <BasicButtons text='Primary' type='primary' size='small' />
      <code>{"<BasicButtons text='Primary' type='primary' size='small' />"}</code>
      </div>
      <div style={{display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center', width: '650px', justifyContent:'space-between'}}>
      
      <BasicButtons text='Secondary' type='secondary' size='small' />
      <code>{"<BasicButtons text='Secondary' type='secondary' size='small' />"}</code>
      </div>
      <div style={{display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center', width: '650px', justifyContent:'space-between'}}>
      
      <BasicButtons text='Ternary' type='ternary' size='small' />
      <code>{"<BasicButtons text='Ternary' type='ternary' size='small' />"}</code>
      </div>
    </div>
  )
}
