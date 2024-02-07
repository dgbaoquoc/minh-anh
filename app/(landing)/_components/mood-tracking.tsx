import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function MoodTracking() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-500 dark:text-gray-400 text-center">
        Trên thang điểm 5 nhé em yêu.
      </p>
      <div className="w-full grid gap-2">
        <RadioGroup
          className="flex items-center justify-center gap-4"
          defaultValue="3"
        >
          <Label className="cursor-pointer" htmlFor="mood-1">
            <RadioGroupItem className="sr-only" id="mood-1" value="1" />
            <div className="text-4xl hover:scale-110 transition-transform duration-300">
              😡
            </div>
          </Label>
          <Label className="cursor-pointer" htmlFor="mood-2">
            <RadioGroupItem className="sr-only" id="mood-2" value="2" />
            <div className="text-4xl hover:scale-110 transition-transform duration-300">
              😠
            </div>
          </Label>
          <Label className="cursor-pointer" htmlFor="mood-3">
            <RadioGroupItem className="sr-only" id="mood-3" value="3" />
            <div className="text-4xl hover:scale-110 transition-transform duration-300">
              😐
            </div>
          </Label>
          <Label className="cursor-pointer" htmlFor="mood-4">
            <RadioGroupItem className="sr-only" id="mood-4" value="4" />
            <div className="text-4xl hover:scale-110 transition-transform duration-300">
              😄
            </div>
          </Label>
          <Label className="cursor-pointer" htmlFor="mood-5">
            <RadioGroupItem className="sr-only" id="mood-5" value="5" />
            <div className="text-4xl hover:scale-110 transition-transform duration-300">
              😆
            </div>
          </Label>
        </RadioGroup>
      </div>
    </div>
  );
}
