import DynamicTablePage from "../page/DynamicTablePage"
describe('Dynamic Table Test', () => {
  it('Compare Chrome CPU Value to Table Value', () => {

    DynamicTablePage.visit()
    DynamicTablePage.ClickButton()
    DynamicTablePage.CompareChromeCPUValuetoTableValue()
   
  })
})