import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip} from "@chakra-ui/react";
import { useState } from "react";

const SliderBar = () => {
    const [sliderValue, setSliderValue] = useState(1)
    console.log("Slider Value", sliderValue)
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <Slider
            id='slider'
            defaultValue={1}
            min={1}
            max={4}
            colorScheme='teal'
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm'>
                2
            </SliderMark>
            <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm'>
                4
            </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`${sliderValue}`}
            >
                <SliderThumb />
            </Tooltip>
        </Slider>
    )
}

export default SliderBar;