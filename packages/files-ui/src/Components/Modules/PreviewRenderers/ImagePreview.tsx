import React, { useEffect, useState } from "react"
import { IPreviewRendererProps } from "../FilePreviewModal"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import {
  makeStyles,
  ITheme,
  createStyles,
  useThemeSwitcher
} from "@chainsafe/common-theme"
import {
  Button,
  ZoomInIcon,
  ZoomOutIcon,
  FullscreenIcon
} from "@chainsafe/common-components"

const useStyles = makeStyles(
  ({ constants, palette, zIndex, breakpoints }: ITheme) =>
    createStyles({
      root: {
        maxHeight: "100vh",
        maxWidth: "100vw",
        [breakpoints.up("md")]: {
          maxWidth: "80vw"
        }
      },
      controlsContainer: {
        position: "absolute",
        zIndex: zIndex?.layer1,
        display: "flex",
        flexDirection: "row",
        top: 0,
        right: 0,
        height: constants.generalUnit * 8,
        backgroundColor: palette.additional["gray"][9],
        color: palette.additional["gray"][3],
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: palette.additional["gray"][8]
      }
    })
)

const ImagePreview: React.FC<IPreviewRendererProps> = ({ contents }) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>()

  useEffect(() => {
    setImageUrl(URL.createObjectURL(contents))

    return () => {
      imageUrl && URL.revokeObjectURL(imageUrl)
    }
    // eslint-disable-next-line
  }, [contents])
  const classes = useStyles()
  const { desktop } = useThemeSwitcher()

  return (
    <div className={classes.root}>
      <TransformWrapper
        options={{
          limitToBounds: true,
          limitToWrapper: true,
          minScale: 0.2
        }}
      >
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {desktop && (
                <div className={classes.controlsContainer}>
                  <Button onClick={zoomIn}>
                    <ZoomInIcon />
                  </Button>
                  <Button onClick={zoomOut}>
                    <ZoomOutIcon />
                  </Button>
                  <Button onClick={resetTransform}>
                    <FullscreenIcon />
                  </Button>
                </div>
              )}
              <TransformComponent>
                <img
                  src={imageUrl}
                  alt=""
                  className={classes.root}
                />
              </TransformComponent>
            </>
          )
        }
      </TransformWrapper>
    </div>
  )
}

export default ImagePreview
