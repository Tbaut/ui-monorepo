import React, { ReactNode } from "react"
import { ITheme, makeStyles, createStyles } from "@chainsafe/common-themes"
import clsx from "clsx"

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "table",
      borderCollapse: "collapse",
      borderSpacing: 0,
      transition: `all ${theme.animation.transform}ms`,
      textAlign: "left",
      "& th, & td": {
        padding: `${theme.constants.generalUnit * 2}px`,
      },
    },
    fullWidth: {
      width: "100%",
    },
    dense: {
      "& th, & td": {
        padding: `${theme.constants.generalUnit}px`,
      },
    },
    hover: {
      "& tr:hover": {
        backgroundColor: theme.palette.secondary.hover,
      },
      "& tr:nth-child(even)": {
        "&:hover": {
          backgroundColor: theme.palette.secondary.hover,
        },
      },
    },
    striped: {
      "& tr:nth-child(even)": {
        backgroundColor: theme.palette.secondary.background,
      },
    },
  }),
)

export interface ITableProps {
  className?: string
  children: ReactNode | ReactNode[]
  striped?: boolean
  fullWidth?: boolean
  hover?: boolean
  dense?: boolean
}

const Table: React.FC<ITableProps> = ({
  children,
  className,
  fullWidth,
  striped,
  hover,
  dense,
  ...rest
}: ITableProps) => {
  const classes = useStyles()

  return (
    <table
      className={clsx(
        classes.root,
        {
          [classes.hover]: hover,
          [classes.fullWidth]: fullWidth,
          [classes.dense]: dense,
          [classes.striped]: striped,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </table>
  )
}

export default Table