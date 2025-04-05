export interface Generation{
  fuel:string,
  perc:number
}

export interface MyChartProps{
  generationDataList:Generation[],
  chartOption:string,
  setChartOption:React.Dispatch<React.SetStateAction<string>>,
  rangeDateStart:string
  rangeDateEnd:string
}

export interface MyErrorProps{
  errorMSG:string
}