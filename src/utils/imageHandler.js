import { ImagePicker } from 'expo'
import { Permissions } from 'expo'

async function askForCameraRollPremission() {
  await Permissions.askAsync(Permissions.CAMERA_ROLL)
}

export const pickImage = async () => {
  await askForCameraRollPremission()

  let result = await ImagePicker.launchImageLibraryAsync()

  if (!result.cancelled) {
    return result.uri
  }

  return null
}
