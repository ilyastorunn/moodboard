import React from "react";
import TechColumn from "./TechColumn";
import TechImage from "./TechImage";

function Tech() {
  return (
    <section className="overflow-hidden px-12 py-5 bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <TechColumn className="w-[28%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-10 max-md:mt-10">
            <header className="text-4xl font-bold text-neutral-700">
              tech.
            </header>
            <h2 className="mt-16 text-2xl text-black uppercase max-md:mt-10">
              some tech products
              <br />
              that inspire me
            </h2>
            <div className="flex flex-col self-stretch pl-7 mt-24 max-md:pl-5 max-md:mt-10">
              <TechImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2097ed7a5428c0a55923385c04be2e91f2c54108?placeholderIfAbsent=true&apiKey=7a8366c298a74feea48765b2d1e67f44"
                className="self-end max-w-full aspect-square rounded-[180px] w-[300px]"
              />
              <TechImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec802983a9b5180612b198338022c964e654d33f?placeholderIfAbsent=true&apiKey=7a8366c298a74feea48765b2d1e67f44"
                className="mt-28 w-full aspect-square rounded-[360px] max-md:mt-10 max-md:mr-2"
              />
            </div>
          </div>
        </TechColumn>

        <TechColumn className="ml-5 w-[72%] max-md:ml-0 max-md:w-full">
          <div className="w-full max-md:mt-10 max-md:max-w-full">
            <div className="max-w-full w-[968px]">
              <div className="flex gap-5 max-md:flex-col">
                <TechColumn className="w-6/12 max-md:ml-0 max-md:w-full">
                <TechImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9fefe8f589a2d87ef96797925b30d91e11a0a45?placeholderIfAbsent=true&apiKey=7a8366c298a74feea48765b2d1e67f44"
                    className="w-full aspect-square rounded-[199px] max-md:mt-10"
                  />
                </TechColumn>
                <TechColumn className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <TechImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/102b768a6c487753849ed7a633b3659dd1681317?placeholderIfAbsent=true&apiKey=7a8366c298a74feea48765b2d1e67f44"
                    className="mt-24 w-full aspect-square rounded-[360px] max-md:mt-10"
                  />
                </TechColumn>
              </div>
            </div>
            <div className="mt-3.5 ml-4 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <TechColumn className="w-[64%] max-md:ml-0 max-md:w-full">
                  <div className="w-full max-md:mt-8 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <TechColumn className="w-[44%] max-md:ml-0 max-md:w-full">
                        <TechImage
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c6b371355977f8faa2918b5ca967218161c02eb?placeholderIfAbsent=true&apiKey=7a8366c298a74feea48765b2d1e67f44"
                            className="shrink-0 self-stretch my-auto max-w-full aspect-square rounded-[180px] w-[200px] max-md:mt-10"
                          />
                        </TechColumn>
                        <TechColumn className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                          <TechImage
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e49b94146aa7bb3503f59dad476a71de402108f?placeholderIfAbsent=true&apiKey=7a8366c298a74feea48765b2d1e67f44"
                            className="w-full aspect-square rounded-[180px] max-md:mt-10"
                          />
                        </TechColumn>
                      </div>
                    </div>
                    <TechImage
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8365ae47e67baa6638225a4cb34fd3bf50f12730?placeholderIfAbsent=true&apiKey=7a8366c298a74feea48765b2d1e67f44"
                      className="mt-10 ml-6 max-w-full aspect-square rounded-[360px] w-[400px] max-md:mt-10 max-md:ml-2.5"
                    />
                  </div>
                </TechColumn>
                <TechColumn className="ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                  <TechImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e914174de6e4e1de15437358edcf376748bb7213?placeholderIfAbsent=true&apiKey=7a8366c298a74feea48765b2d1e67f44"
                    className="self-stretch my-auto w-full aspect-square rounded-[240px] max-md:mt-10"
                  />
                </TechColumn>
              </div>
            </div>
          </div>
        </TechColumn>
      </div>
    </section>
  );
}

export default Tech;