import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardActions,
  CardContent,
  CardHeader,
  CardHeaderProps,
  CardMedia,
  CardMediaProps,
} from "@mui/material";

interface CardProps extends MuiCardProps {
  variant?: "outlined" | "elevation";
  useHeader?: boolean;
  headerOptions?: CardHeaderProps<"div">;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  useMedia?: boolean;
  mediaOptions?: CardMediaProps;
  custom?: boolean;
  children?: React.ReactNode;
}

const Card = ({
  variant,
  headerOptions,
  content,
  actions,
  mediaOptions,
  custom,
  children,
  useHeader,
  useMedia,
  ...props
}: CardProps) => {
  return (
    <MuiCard variant={variant} {...props}>
      {custom ? (
        children
      ) : (
        <>
          {useHeader && <CardHeader {...headerOptions} />}
          {useMedia && <CardMedia {...mediaOptions} />}
          <CardContent>{content}</CardContent>
          {actions && <CardActions>{actions}</CardActions>}
        </>
      )}
    </MuiCard>
  );
};

export default Card;
